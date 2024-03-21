import React from 'react'
import HeadingTitle from '../headingTitle/HeadingTitle'
import { MdVisibility } from 'react-icons/md'
import BoxOption from '../boxOption/BoxOption'
import { Photo } from '../../category'
import { FaQuoteLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PhotoGal = () => {
    return (
        <>
            <section className="photoGal container p-[30px] ">
                <div className="photoGalWrapper  lg:flex-row flex-col  flex gap-[25px]">
                    <div className="photoGalImg flex-col  flex  flex-[8]">
                        <HeadingTitle title="Photo Gallery"/>
                        <div className="top relative mb-[10px]">
                            <Link className='list-none border-none outline-none no-underline' to="/blog/d469ab57-a736-4d38-8a02-b15cf6e7f34a">
                            <img className='w-full h-full cursor-pointer' src="/assets/images/pyramids-65e5fd0a18eb8.webp" alt="pyramids" />
                            </Link>
                            <span className='cat flex absolute items-center justify-center top-5 left-5 duration-500 bg-[#111] text-white text-xs font-medium py-[5px] px-2.5 uppercase hover:bg-[#ce0000] hover:cursor-pointer '>Nature</span>
                            <span  className='icon absolute flex items-center justify-center top-5 right-5 duration-500 bg-[#ce0000] text-white text-xs font-medium py-[5px] px-2.5 uppercase hover:bg-[#111] hover:cursor-pointer '>
                                <MdVisibility className='text-[20px]' />
                            </span>

                            <div className="postInfo absolute flex bottom-0 left-0 items-center ">
                                <ul className="nav list-none m-0 p-0 flex items-center gap-[15px] text-white text-sm ml-5 duration-500 hover:text-[#ce0000] ">
                                    <li className='font-semibold invisible'>Mahmoud Mohamed</li>
                                    <li className='font-semibold invisible'>Jan 26, 2024</li>
                                </ul>
                                <h3 className='pt-2.5 px-5 pb-2.5 w-[730px] invisible text-bsae duration-500 font-bold text-white hover:text-[#ce0000] hover:cursor-pointer '>Great Pyramid of Giza</h3>
                            </div>
                        </div>

                        <BoxOption {...Photo}/>
                    </div>
                    <div className="photoGalReader flex-[4]  flex flex-col ">
                    <HeadingTitle title='Readers Opinion'/>

                    <div className="readerListWrapper flex-col  bg-[#f4f4f4] py-5 px-[15px]">
                        <div className="readerListItem flex items-center justify-between gap-5 mb-[15px] border-b border-solid border-[#eee] ">
                            <div className="readerImg">
                                <img className='w-20 h-20 object-cover rounded-[50%] border border-solid border-title cursor-pointer' src="assets/images/icon-prof-65e63ab618209.webp" loading='lazy' alt="userPhoto" />
                            </div>
                            <div className="postInfo w-3/4 pl-[9px] flex flex-col">
                                <div className="title">
                                    <h3 className='text-title font-extrabold'>
                                        <FaQuoteLeft className='icon  text-title'/>
                                        Mahmoud Mohamed is a great developer.
                                    </h3>
                                </div>
                                <ul className='list-none p-0 m-0 flex items-center gap-5'>
                                    <li className='text-title'>by Mahmoud Mohamed</li>
                                    <li className='text-title'>Jan 26, 2024</li>
                                </ul>
                            </div>
                        </div>
                        <div className="readerListItem flex items-center justify-between gap-5 mb-[15px] border-b border-solid border-[#eee]">
                            <div className="readerImg">
                                <img className='w-20 h-20 object-cover rounded-[50%] border border-solid border-title cursor-pointer' src="assets/images/icon-prof-65e63ab618209.webp" loading='lazy' alt="userPhoto2" />
                            </div>
                            <div className="postInfo w-3/4 pl-[9px] flex flex-col">
                                <div className="title">
                                    <h3 className='text-title font-extrabold'>
                                        <FaQuoteLeft className='icon  text-title'/>
                                        I suggest you to hire or work with Mahmoud Mohamed.
                                    </h3>
                                </div>
                                <ul className='list-none p-0 m-0 flex items-center gap-5'>
                                    <li className='text-title'>by Mahmoud Mohamed</li>
                                    <li className='text-title'>Jan 26, 2024</li>
                                </ul>
                            </div>
                        </div>
                        <div className="readerListItem flex items-center justify-between gap-5 mb-[15px] border-b border-solid border-[#eee]">
                            <div className="readerImg">
                                <img className='w-20 h-20 object-cover rounded-[50%] border border-solid border-title cursor-pointer' src="assets/images/icon-prof-65e63ab618209.webp" loading='lazy' alt="userPhoto3" />
                            </div>
                            <div className="postInfo w-3/4 pl-[9px] flex flex-col">
                                <div className="title">
                                    <h3 className='text-title font-extrabold'>
                                        <FaQuoteLeft className='icon  text-title'/>
                                        Thanks for your reading. I know you will contact with me to work.
                                    </h3>
                                </div>
                                <ul className='list-none p-0 m-0 flex items-center gap-5'>
                                    <li className='text-title'>by Mahmoud Mohamed</li>
                                    <li className='text-title'>Jan 26, 2024</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default PhotoGal