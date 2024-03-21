import React from 'react'
import {ImGooglePlus} from 'react-icons/im'
import {GiRss} from 'react-icons/gi'
import {TfiYoutube} from 'react-icons/tfi'
import {BsVimeo} from 'react-icons/bs'
import { FaFacebookF, FaShareAlt, FaTwitter } from 'react-icons/fa'

const Widget = () => {
    return (
        <>
            <div className="widget flex flex-col gap-[60px]">
                <div className="top pt-[30px] px-[30px] pb-[15px] bg-[#f4f4f4] text-center">
                    <a href='/'>
                        <img className='w-full h-full mb-[15px] cursor-pointer' loading='lazy' src="assets/images/ad-300x250-2-65e63ea9b0078.webp" alt="Advertisment" />
                    </a>
                </div>
                <div className="center relative flex items-center justify-between py-3 px-0 border-t-2 border-solid border-[#ce0000] z-0">
                    <h2 className='relative m-0 text-[#ce0000] text-base font-bold uppercase z-0'>Stay Connected</h2>
                    <FaShareAlt className='icon text-title text-sm lg:text-lg cursor-pointer'/>
                </div>
                <div className="bottom mt-[-55px]">
                    <ul className='nav m-0 list-none bg-[#f4f4f4] flex flex-wrap p-5 items-center justify-between gap-[27px] lg:gap-[35px]'>
                        <li className="facebook">
                            <a href='/' className='flex flex-col items-center cursor-pointer'>
                                <span className='icon w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]  transition-all duration-[0.25s] ease-in-out flex items-center justify-center rounded-[50%] text-2xl mb-[5px] border border-solid border-[#1877F2] text-[#1877F2] hover:text-white hover:bg-[#1877F2]'>
                                    <FaFacebookF className='facebookicon text-sm lg:text-lg'/>
                                </span>
                                <span className="count mt-[6px] text-base font-bold text-[#111]">26000</span>
                                <span className="title text-title mt-[-1px] text-xs font-bold uppercase">Likes</span>
                            </a>
                        </li>
                        <li className="twitter">
                            <a href='/' className='flex flex-col items-center cursor-pointer'>
                                <span className='icon w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]  transition-all duration-[0.25s] ease-in-out flex items-center justify-center rounded-[50%] text-2xl mb-[5px] border border-[#08a0e9] border-solid text-[#08a0e9] hover:text-white hover:bg-[#08a0e9]'>
                                    <FaTwitter className='twittericon text-sm lg:text-lg'/>
                                </span>
                                <span className="count mt-[6px] text-base font-bold text-[#111]">4600</span>
                                <span className="title text-title mt-[-1px] text-xs font-bold uppercase">Followers</span>
                            </a>
                        </li>
                        <li className="googlePlus">
                            <a href='/' className='flex flex-col items-center cursor-pointer'>
                                <span className='icon w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]  transition-all duration-[0.25s] ease-in-out flex items-center justify-center rounded-[50%] text-2xl mb-[5px] border border-solid border-[#DB4437] text-[#DB4437] hover:text-white hover:bg-[#DB4437]'>
                                    <ImGooglePlus className='googleicon text-sm lg:text-lg'/>
                                </span>
                                <span className="count mt-[6px] text-base font-bold text-[#111]">654600</span>
                                <span className="title text-title mt-[-1px] text-xs font-bold uppercase">Followers</span>
                            </a>
                        </li>
                        <li className="rss">
                            <a href='/' className='flex flex-col items-center cursor-pointer'>
                                <span className='icon w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]  transition-all duration-[0.25s] ease-in-out flex items-center justify-center rounded-[50%] text-2xl mb-[5px] border border-solid border-[#EE802F] text-[#EE802F] hover:text-white hover:bg-[#EE802F]'>
                                    <GiRss className='rssicon text-sm lg:text-lg'/>
                                </span>
                                <span className="count mt-[6px] text-base font-bold text-[#111]">1546</span>
                                <span className="title text-title mt-[-1px] text-xs font-bold uppercase">Subscriber</span>
                            </a>
                        </li>
                        <li className="vimeo">
                            <a href='/' className='flex flex-col items-center cursor-pointer'>
                                <span className='icon w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]  transition-all duration-[0.25s] ease-in-out flex items-center justify-center rounded-[50%] text-2xl mb-[5px] border border-solid border-[#1AB7EA] text-[#1AB7EA] hover:text-white hover:bg-[#1AB7EA]'>
                                    <BsVimeo className='vimeoicon text-sm lg:text-lg'/>
                                </span>
                                <span className="count mt-[6px] text-base font-bold text-[#111]">7546</span>
                                <span className="title text-title mt-[-1px] text-xs font-bold uppercase">Followers</span>
                            </a>
                        </li>
                        <li className="youtube">
                            <a href='/' className='flex flex-col items-center cursor-pointer'>
                                <span className='icon w-[50px] lg:w-[60px] h-[50px] lg:h-[60px]  transition-all duration-[0.25s] ease-in-out flex items-center justify-center rounded-[50%] text-2xl mb-[5px] border border-solid border-[#E62117] text-[#E62117] hover:text-white hover:bg-[#E62117]'>
                                    <TfiYoutube className='youtubeicon text-sm lg:text-lg'/>
                                </span>
                                <span className="count mt-[6px] text-base font-bold text-[#111]">1697546</span>
                                <span className="title text-title mt-[-1px] text-xs font-bold uppercase">Subscriber</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Widget