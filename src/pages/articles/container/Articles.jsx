import React, { useEffect, useState } from "react";
import ArticleCard from "../../../components/articleCard/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/index/posts";
import { toast } from "react-hot-toast";
import ArticleCardSkeleton from "../../../components/articleCardSkeleton/ArticleCardSkeleton";
import ErrorMessage from "../../../components/errorMessage/ErrorMessage";
import Pagination from "../../../components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";

let isFirstRun = true;

const Articles = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsValue = Object.fromEntries([...searchParams]);

  const [currentPage, setCurrentPage] = useState(parseInt(searchParamsValue?.page) || 1);

  const { data, isLoading, isError, refetch} = useQuery({
    queryFn: () => getAllPosts("", currentPage, 9),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  
  // const headers = {
    //   'X-TotalPageCount' : data.length / 9,
    // }
    
    // const headers = data?.headers?.["X-TotalPageCount"];

    const headers = {
      'X-TotalPageCount' : '6',
    }

  const headersJsonString = JSON.stringify(headers);

  console.log('headers:',headers);

  const parseHeaders = JSON.parse(headersJsonString);

  useEffect(()=>{
    if(isFirstRun){
      isFirstRun = false;
      return;
    }
    window.scrollTo(0, 0);
    refetch();
  },[currentPage, refetch]);

  const handlePageChange = (page) =>{
    setCurrentPage(page);

    // change page query in URL

    setSearchParams({page});
  }

    console.log("data:",data);
  
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {isLoading ? (
          [...Array(3)].map((item, index) => (
            <ArticleCardSkeleton
              key={index}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))
        ) : isError ? (
          <ErrorMessage message="Couldn't fetch the posts data" />
        ) : (
          data?.data.map((post) => (
            <ArticleCard
              key={post._id}
              post={post}
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
            />
          ))        )}
      </div>
      {
        !isLoading && (
          <div
            className="flex items-center justify-center my-5">
              <Pagination
                  onPageChange={(page) => handlePageChange(page)}
                  currentPage={currentPage}
                  totalPageCount={parseHeaders['X-TotalPageCount']}
                  // totalPageCount={parseHeaders}
                  // totalPageCount={JSON.parse(data?.headers?.["X-TotalPageCount"] )}
                  />
          </div>
         )
        } 
    </section>
  );
  
};

export default Articles;
