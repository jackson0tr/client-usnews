import React from 'react'
import { MdFlashOn } from 'react-icons/md'

const MainContent = () => {
    return (
        <>
            <section className="mainContent container flex lg:h-[60vh] h-full mt-[-40px] mx-2 lg:mx-[30px] mb-0 pt-[30px] gap-[10px]">
                <div className="col flex flex-[1] flex-col overflow-hidden gap-[10px]">
                    <div className="row relative flex flex-[1] gap-[10px]">
                        <a className='no-underline' href='/blog/437ad052-189b-4da6-8ea8-032216e8dadb'>
                            <img className='w-full h-full object-cover' src="assets/images/ukraine-65e4d298d6866.webp" loading="eager" priority="high" alt="photo" />
                            </a>
                        <span className="cat absolute lg:visible invisible text-[8px] px-[2px] py-[1px] font-normal top-5 left-5 flex bg-[#111] text-white lg:py-[5px] lg:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#ce0000] cursor-pointer">Politics</span>
                        <span className="icon absolute lg:visible invisible top-5 right-10 text-[8px] px-[2px] py-[1px] font-normal flex bg-[#ce0000] text-white lg:py-[5px] lg:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#111] cursor-pointer">
                            <MdFlashOn className='text-[8px] lg:text-[20px]'/>
                        </span>

                        <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex items-center ml-[5px] gap-[5px] font-normal lg:gap-[15px] text-white text-sm lg:font-semibold lg:ml-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer">
                                <li className='lg:font-semibold font-normal lg:visible invisible text-[8px] lg:text-sm'>Mahmoud Mohamed</li>
                                <li className='lg:font-semibold font-normal text-[8px] lg:visible invisible lg:text-sm'>Jan 20, 2024</li>
                            </ul>
                            <h3 className='pt-[10px] px-5 text-[8px] pb-5 w-[550px] lg:visible invisible text-white ml-[5px] font-extrabold lg:text-base duration-500 hover:text-[#ce0000] hover:cursor-pointer'>Russo-Ukrainian War</h3>
                        </div>
                    </div>
                </div>
                <div className="col flex flex-[1] flex-col overflow-hidden gap-[10px]">
                    <div className="row relative flex flex-[1] lg:gap-[10px]  gap-1">
                        <div className="col flex flex-[1] flex-col overflow-hidden gap-[10px]">
                            <div className="row relative flex flex-[1] gap-[10px]">
                                <a className='no-underline' href='/blog/9bb50e87-366f-493c-9982-9ddb4487bf6d'><img className=' w-full  h-full object-cover' src="assets/images/banner-02-65e5fa3d68a6a.webp" loading='lazy' alt="photo" /></a>
                                <span className="cat absolute left-[2px] lg:visible invisible top-[2px] text-[8px] px-[2px] py-[1px] font-normal lg:top-5 lg:left-5 flex bg-[#111] text-white lg:py-[5px] lh:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#ce0000] cursor-pointer">Travel</span>
                                <span className="icon absolute lg:top-5 lg:visible invisible right-10 top-[2px] text-[8px] px-[2px] py-[1px] font-normal lg:right-5 flex bg-[#ce0000] text-white lg:py-[5px] lg:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#111] cursor-pointer">
                                    <MdFlashOn className='text-[8px] lg:text-[20px]'/>
                                </span>
                                <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex items-center ml-[2px] gap-0 font-normal lg:gap-[15px] text-white text-sm lg:font-semibold lg:ml-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer">
                                <li className='lg:font-semibold font-normal lg:visible invisible text-sm'>Mahmoud Mohamed</li>
                                <li className='lg:font-semibold font-normal  lg:visible invisible text-sm'>Jan 21, 2024</li>
                            </ul>
                            <h3 className='lg:pt-[10px] pt-0 pb-1 lg:px-5 px-1 lg:pb-5 lg:visible invisible text-sm w-[550px] text-white ml-[5px] font-normal lg:font-extrabold lg:text-base duration-500 hover:text-[#ce0000] hover:cursor-pointer'>Algonquin Peak</h3>
                        </div>
                            </div>
                        </div>
                        <div className="col flex flex-[1] flex-col overflow-hidden gap-[10px]">
                            <div className="row relative flex flex-[1] lg:gap-[10px]  gap-1">
                                <a className='no-underline' href='/blog/bbe243d7-2653-47bc-af08-3c76dbe1913c'><img className='w-[80%] lg:w-[85%]  h-full object-cover' src="assets/images/banner-03-65e4d264b8d80.webp" loading='lazy' alt="photo" /></a>
                                <span  className="cat absolute left-[2px] lg:visible invisible top-[2px] text-[8px] px-[2px] py-[1px] font-normal lg:top-5 lg:left-5 flex bg-[#111] text-white lg:py-[5px] lg:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#ce0000] cursor-pointer">Education</span>
                                <span  className="icon absolute lg:top-5 lg:visible invisible lg:right-14 right-[2px] top-[2px] text-[8px] px-[2px] py-[1px] font-normal flex bg-[#ce0000] text-white lg:py-[5px] lg:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#111] cursor-pointer">
                                    <MdFlashOn className='text-[8px] lg:text-[20px]'/>
                                </span>
                                <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex items-center ml-[2px] gap-0 font-normal lg:gap-[15px] text-white text-sm lg:font-semibold lg:ml-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer">
                                <li className='lg:font-semibold lg:visible invisible  font-normal text-sm'>Mahmoud Mohamed</li>
                                <li className='lg:font-semibold  font-normal lg:visible invisible text-sm'>Jan 21, 2024</li>
                            </ul>
                            <h3 className='lg:pt-[10px] pt-0 pb-1 px-1 ml-[2px] lg:px-5 lg:visible invisible text-sm lg:pb-5 w-[550px] text-white lg:ml-[5px] font-normal lg:font-extrabold lg:text-base duration-500 hover:text-[#ce0000] hover:cursor-pointer'>Children's Education</h3>
                        </div>
                            </div>
                        </div>
                    </div>
                            <div className="row relative flex flex-[1] lg:gap-[10px] gap-1">
                                <a className='no-underline' href='/blog/c6de084a-893e-4979-9a41-a59b5bc782c8'><img className=' lg:w-[90%] w-[90%]  h-full object-cover' src="assets/images/banner-04-65e4d264a7fdb.webp" loading='lazy' alt="photo" /></a>
                                <span  className="cat absolute lg:visible invisible text-[8px] left-[2px] top-[2px] px-[2px] py-[1px] font-normal lg:top-5 lg:left-5 flex bg-[#111] text-white lg:py-[5px] lg:px-[10px] lg:text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#ce0000] cursor-pointer">Election</span>
                                <span  className="icon absolute lg:visible invisible lg:top-5 lg:right-[70px] right-[2px] top-[2px] text-[8px] px-[2px] py-[1px] font-normal flex bg-[#ce0000] text-white lg:py-[5px] lg:px-[10px] text-xs lg:font-medium uppercase items-center duration-500 justify-center hover:bg-[#111] cursor-pointer">
                                    <MdFlashOn className='text-[8px] lg:text-[20px]'/>
                                </span>
                                <div className="postInfo absolute bottom-0 left-0 flex flex-col">
                            <ul className="nav list-none flex items-center ml-[5px] gap-0 font-normal lg:gap-[15px] text-white text-sm lg:font-semibold lg:ml-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer">
                                <li className='lg:font-semibold lg:visible invisible  font-normal text-sm'>Mahmoud Mohamed</li>
                                <li className='lg:font-semibold  font-normal  lg:visible invisible text-sm'>Jan 20, 2024</li>
                            </ul>
                            <h3 className='lg:pt-[10px] pt-0 pb-1 ml-[2px] px-5 text-sm lg:visible invisible lg:pb-5 w-[550px] text-white lg:ml-[5px] lg:font-extrabold lg:text-base duration-500 hover:text-[#ce0000] hover:cursor-pointer'>Donald Trump Speech</h3>
                        </div>
                            </div>
                </div>
            </section>
        </>
    )
}

export default MainContent