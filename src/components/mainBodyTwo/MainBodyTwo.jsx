import React from 'react'
import StyleTwo from '../styleTwo/StyleTwo'
import StyleOne from '../styleOne/StyleOne'
import { Finance, Sports } from '../../category'
import { FaRegNewspaper } from 'react-icons/fa'
import {GoMegaphone} from 'react-icons/go'

const MainBodyTwo = () => {
    return (
        <>
            <section className="mainBodyTwo container flex  lg:block lg:flex-row flex-col lg:flex-grow-0 flex-grow py-0 px-[30px]">
                <div className="mainBodyTwoWrapper flex  lg:flex-row lg:flex-grow-0 flex-col flex-grow gap-[25px]">
                    <div className="styleOne1 flex-[4] flex-col lg:flex-row w-full">
                        <StyleTwo {...Finance}/>
                    </div>
                    <div className="styleTwo2 flex-[4] flex-col lg:flex-row  w-full">
                        <StyleOne {...Sports}/>
                    </div>
                    <div className="styleThree flex-[4] flex-col lg:flex-row  w-full">
                        <div className="widgets flex flex-col">
                            <div className="widgetTitle relative flex items-center justify-between py-3 px-0 border-t-2 border-solid border-[#ce0000] z-0">
                                <h2 className='relative m-0 text-[#ce0000] text-base font-bold uppercase z-0'>Featured News</h2>
                                <FaRegNewspaper className='icon text-title text-xl cursor-pointer'/>
                            </div>
                            
                            <div className="list flex flex-col bg-[#f4f4f4] p-[15px] mb-[60px]">
                                <div className="top flex">
                                    <ul className='list-none m-0  w-full gap-[2px] md:gap-1 lg:gap-5 flex items-center justify-center p-1'>
                                        <li className='text-title py-[5px] px-0'>
                                            <a href='/' className="hotNews font-bold">Hot News</a>
                                        </li>
                                        <li className='text-white bg-[#ce0000] cursor-pointer py-[5px] px-1'>
                                            <a href='/' className="trendyNews font-bold">Trendy News</a>
                                        </li>
                                        <li className='text-title py-[5px] px-0'>
                                            <a href='/' className="mostWatched font-bold">Most Watched</a>
                                        </li>
                                    </ul>
                                </div>
                                    <div className="bottom">
                                        <div className="item flex items-center mt-[15px] gap-[15px] pt-[14px] border-t border-solid border-[#ccc]">
                                            <div className="left">
                                                <a href="/blog/0fd0dfd2-9005-4036-9d53-5445a70b8edb">
                                                <img className='w-[110px] h-full cursor-pointer' src="assets/images/cr7-65e5faf52861d.webp" loading='lazy' alt="photo" />
                                                </a>
                                            </div>
                                            <div className="right flex flex-col">
                                                <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Mahmoud Mohamed</li>
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Jan 22, 2024</li>
                                                </ul>
                                                <h3 className='font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Cristiano Ronaldo</h3>
                                            </div>
                                        </div>
                                        <div className="item flex items-center mt-[15px] gap-[15px] pt-[14px] border-t border-solid border-[#ccc]">
                                            <div className="left">
                                                <a href="/blog/228cb8cd-b6a5-4979-9949-faf5aa68b137">
                                                <img className='w-[110px] h-full cursor-pointer' src="assets/images/neuralink-65e4d2942ea14.webp" loading='lazy' alt="photo" />
                                                </a>
                                            </div>
                                            <div className="right flex flex-col">
                                                <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Mahmoud Mohamed</li>
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Jan 21, 2024</li>
                                                </ul>
                                                <h3 className='font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Neuralink</h3>
                                            </div>
                                        </div>
                                        <div className="item flex items-center mt-[15px] gap-[15px] pt-[14px] border-t border-solid border-[#ccc]">
                                            <div className="left">
                                                <a href="/blog/437ad052-189b-4da6-8ea8-032216e8dadb">
                                                <img className='w-[110px] h-full cursor-pointer' src="assets/images/ukraine-65e4d298d6866.webp" loading='lazy' alt="photo" />
                                                </a>
                                            </div>
                                            <div className="right flex flex-col">
                                                <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Mahmoud Mohamed</li>
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Jan 20, 2024</li>
                                                </ul>
                                                <h3 className='font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Russo-Ukrainian War</h3>
                                            </div>
                                        </div>
                                        <div className="item flex items-center mt-[15px] gap-[15px] pt-[14px] border-t border-solid border-[#ccc]">
                                            <div className="left">
                                                <a href="/blog/e42732ce-5ab0-46be-9e92-d7c90983bb8d">
                                                <img className='w-[110px] h-full cursor-pointer' src="assets/images/robotics-65e4d297ecac7.webp" loading='lazy' alt="photo" />
                                                </a>
                                            </div>
                                            <div className="right flex flex-col">
                                                <ul className="nav list-none m-0 p-0 flex items-center gap-[15px]">
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Mahmoud Mohamed</li>
                                                    <li className='text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Jan 22, 2024</li>
                                                </ul>
                                                <h3 className='font-bold text-title duration-500 cursor-pointer hover:text-[#ce0000]'>Robotics</h3>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="widgets flex  flex-col">
                            <div className="widgetTitle relative flex items-center justify-between py-3 px-0 border-t-2 border-solid border-[#ce0000] z-0">
                                <h2 className="relative m-0 text-[#ce0000] text-base font-bold uppercase z-0">Advertisment</h2>
                                <GoMegaphone className='icon text-title text-xl cursor-pointer'/>
                            </div>
                            <div className="adWidget pt-[30px] px-[30px] pb-[15px] text-center">
                                <a href='/'>
                                    <img className='w-full h-full mb-[15px] cursor-pointer' src="assets/images/ad-300x250-1-65e4d2fe9b7db.webp" loading='lazy' alt="Advertisment" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBodyTwo