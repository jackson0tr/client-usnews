import React from 'react'
import './audioVideo.css'
import HeadingTitle from '../headingTitle/HeadingTitle'

const AudioVideo = () => {
    return (
        <>
            <div className="audioVideo pt-[30px] px-10 flex-col lg:flex-row pb-5 bg-[#ce0000]">
                <div className="audioVideoWrapper border-t-2 border-solid border-white flex flex-col">
                    <HeadingTitle title="Audio &amp; Videos" />

                    <div className="body flex flex-col lg:flex-row gap-[30px] mb-5">
                        <div className="videoWrapper flex-[8]">
                            <video width='100%' height='100%' controls >
                                <source src='assets/images/breakingNews.mp4' type='video/mp4' />
                            </video>
                        </div>
                        <div className="listWrapper flex-[4.5]">
                            <div className="list flex flex-col h-full justify-between">
                                <div className="item flex items-center gap-5 hover:rounded-[5px] hover:border-t md:p-3 hover:border-solid hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.25)] hover:inset-[1px]  hover:shadow-md">
                                    <div className="left">
                                        <img className='flex h-full w-[110px] cursor-pointer' src="assets/images/audio-video-02-65e5fa6759bf0.webp" loading='lazy' alt="photo" />
                                    </div>
                                    <div className="right flex p-3 lg:p-0 flex-col">
                                        <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>Ronny</li>
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>5 June 2023</li>
                                        </ul>
                                        <h3 className='flex text-xs font-extrabold text-white cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi.</h3>
                                    </div>
                                </div>                           
                                <div className="item flex items-center gap-5 hover:rounded-[5px] hover:border-t md:p-3 hover:border-solid hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.25)] hover:inset-[1px]  hover:shadow-[rgba(255,255,255,0.3)]">
                                    <div className="left">
                                        <img className='flex h-full w-[110px] cursor-pointer' src="assets/images/audio-video-03-65e5fa67d4c72.webp" loading='lazy' alt="photo" />
                                    </div>
                                    <div className="right flex p-3 lg:p-0 flex-col">
                                        <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>Nemar</li>
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>18 April 2023</li>
                                        </ul>
                                        <h3 className='flex text-xs font-extrabold text-white cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi.</h3>
                                    </div>
                                </div>                           
                                <div className="item flex items-center gap-5 hover:rounded-[5px] hover:border-t md:p-3 hover:border-solid hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.25)] hover:inset-[1px]  hover:shadow-md">
                                    <div className="left">
                                        <img className='flex h-full w-[110px] cursor-pointer' src="assets/images/audio-video-04-65e5fa684c56f.webp" loading='lazy' alt="photo" />
                                    </div>
                                    <div className="right flex p-3 lg:p-0 flex-col">
                                        <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>Johne</li>
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>20 Dec 2023</li>
                                        </ul>
                                        <h3 className='flex text-xs font-extrabold text-white cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi.</h3>
                                    </div>
                                </div>                           
                                <div className="item flex items-center gap-5 hover:rounded-[5px] hover:border-t md:p-3 hover:border-solid hover:border-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.25)] hover:inset-[1px]  hover:shadow-md">
                                    <div className="left">
                                        <img className='flex h-full w-[110px] cursor-pointer' src="assets/images/audio-video-05-65e5fa68d7722.webp" loading='lazy' alt="photo" />
                                    </div>
                                    <div className="right flex p-3 lg:p-0 flex-col">
                                        <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>Angela</li>
                                            <li className='text-[#f4f4f4] duration-500 cursor-pointer hover:text-white'>25 Oct 2023</li>
                                        </ul>
                                        <h3 className='flex text-xs font-extrabold text-white cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi.</h3>
                                    </div>
                                </div>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AudioVideo