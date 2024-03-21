import React from 'react'
import HeadingTitle from '../headingTitle/HeadingTitle'
import { FaArrowRight } from 'react-icons/fa';

const StyleTwo = ({category,title,Icon,headingImg,headingAuthor,headingDate,headingExcept,image1,image1Author,
    image1Date,image1Except,image2,image2Author,image2Date,image2Except,image3,image3Author,image3Date,image3Except,
    image4,image4Author,image4Date,image4Except,url,url1,url2,url3,url4}) => {

    
    return (
        <>
            <div className="styleTwo ">
                <HeadingTitle title={category}/>

                <div className="top relative mb-5 w-[370px]  h-[175px] overflow-hidden">
                    <a href={url}><img className='w-[85%] sm:w-[90%] h-full lg:w-full object-cover cursor-pointer' src={headingImg} alt="photo" /></a>
                    <span className="cat absolute flex top-5 items-center justify-center text-white left-5 text-xs font-medium uppercase bg-[#111] py-[5px] px-2.5 duration-500 hover:bg-[#ce0000] ">{title}</span>
                    <span className="icon absolute flex top-5 items-center justify-center text-white right-[70px] lg:right-5 text-xs font-medium uppercase bg-[#ce0000] py-[5px] px-2.5 duration-500 hover:bg-[#111]">{Icon}</span>
                    <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                        <ul className="nav p-0 list-none m-0 flex items-center gap-[15px] text-white text-sm ml-5 duration-500 hover:text-[#ce0000]">
                            <li className='font-semibold'>{headingAuthor}</li>
                            <li className='font-semibold'>{headingDate}</li>
                        </ul>
                        <h3 className='pt-0 px-5 pb-5 text-base text-white duration-500 font-[350px] cursor-pointer hover:text-[#ce0000]'>{headingExcept}</h3>
                    </div>
                </div>
                <div className="bottom">
                    <div className="item flex items-center justify-between mt-[15px] gap-5 pt-[15px] border-t border-solid border-[#cccc]">
                        <div className="left">
                            <a href={url1}><img className='w-[130px] h-full cursor-pointer' src={image1} loading='lazy' alt="photo" /></a>
                        </div>
                        <div className="right flex flex-col">
                            <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image1Author}</li>
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image1Date}</li>
                            </ul>
                            <h3 className='text-start text-base font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>{image1Except}</h3>
                        </div>
                </div>
                    <div className="item flex items-center justify-between mt-[15px] gap-5 pt-[15px] border-t border-solid border-[#cccc]">
                        <div className="left">
                            <a href={url2}><img className='w-[130px] h-full cursor-pointer' src={image2} loading='lazy' alt="photo" /></a>
                        </div>
                        <div className="right flex flex-col">
                            <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image2Author}</li>
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image2Date}</li>
                            </ul>
                            <h3 className='text-start text-base font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>{image2Except}</h3>
                        </div>
                </div>
                    <div className="item flex items-center justify-between mt-[15px] gap-5 pt-[15px] border-t border-solid border-[#cccc]">
                        <div className="left">
                            <a href={url3}><img className='w-[130px] h-full cursor-pointer' src={image3} loading='lazy' alt="photo" /></a>
                        </div>
                        <div className="right flex flex-col">
                            <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image3Author}</li>
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image3Date}</li>
                            </ul>
                            <h3 className='text-start text-base font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>{image3Except}</h3>
                        </div>
                </div>
                    <div className="item flex items-center justify-between mt-[15px] gap-5 pt-[15px] border-t border-solid border-[#cccc]">
                        <div className="left">
                            <a href={url4}><img className='w-[130px] h-full cursor-pointer' src={image4} loading='lazy' alt="photo" /></a>
                        </div>
                        <div className="right flex flex-col">
                            <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image4Author}</li>
                                <li className='text-base text-title duration-500 hover:text-[#ce0000]'>{image4Date}</li>
                            </ul>
                            <h3 className='text-start text-base font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>{image4Except}</h3>
                        </div>
                </div>
                <div className='pt-[15px]'>
                    <button className="mx-auto flex items-center gap-x-2 font-bold text-[#ce0000] border-2 border-[#ce0000] px-6 py-3 rounded-lg hover:bg-[#ce0000] hover:text-white duration-500 ease-in-out">
                        <a href='/blog'>More Blogs</a>
                        <FaArrowRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default StyleTwo