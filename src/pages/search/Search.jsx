import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import { useQuery } from '@tanstack/react-query'
import { postSearch } from '../../services/index/posts'
import ArticleCard from '../../components/articleCard/ArticleCard'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import { toast } from 'react-hot-toast'
import MainLayout from '../../components/mainLayout/MainLayout'
import { Helmet } from 'react-helmet-async'

const Search = () => {

    const { key } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryFn: () => postSearch({ key }),
        queryKey: ["search", key],
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        }
    });

    return (
        <>
        <Helmet>
                <title>Search Page</title>
                <meta 
                    name="description"
                    content="Search any article do you want to read about it."
                />
                <link rel="canonical" href={`https://blog-44.vercel.app/search/${key}`} />
            </Helmet>
            <MainLayout>
                <div className="relative max-w-[1200px] my-0 mx-auto bg-[#fff] shadow-md">
                    <div className="py-12">
                        <div className="py-5 pr-8 pl-32 border-b border-solid border-[#ce0000] relative shadow-md">
                        <h3 className='font-semibold uppercase tracking-[0.5px] space-x-[.5px] text-4xl text-[#ce0000]'>Search results:</h3>
                        </div>
                    </div>
                    <br />
                    <section className="flex flex-col container mx-auto px-5 py-10">
                <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
                {isLoading ? (
                        <Loader/>
                        ) : isError ? (
                            <ErrorMessage message="No posts found" />
                            ) : (
                        data?.data.map((post) => (
                            <ArticleCard
                            key={post._id}
                            post={post}
                            className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                            />
                            ))
                        )}
                </div>
                </section>
                </div>
            </MainLayout>
        </>
    )
}

export default Search