import React from 'react'
import { MdFavoriteBorder, MdFlashOn, MdStarBorder, MdVisibility, MdWhatshot } from 'react-icons/md'


const Hotlinks = () => {

    return (
        <>
            <section className="hotLinks container my-0 mx-auto pt-5  lg:px-[30px] px-3 pb-[30px]">
                <div className="hotLinksWrapper flex items-center justify-center lg:gap-10 gap-1 mb-3 lg:mb-5">
                    <div className="item flex md:px-3 px-2 lg:px-0 items-center">
                        <a href='/' className='flex flex-col items-center lg:gap-[5px] gap-[3px] md:gap-1 text-[#999] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                            <MdStarBorder className='text-[15px] lg:text-[30px]'/>
                            <span className='lg:text-base lg:font-black text-[8px] font-normal'>Featured </span>
                        </a>
                    </div>
                    <div className="item flex md:px-3 px-2 lg:px-0 items-center">
                        <a href='/' className='flex flex-col items-center lg:gap-[5px] gap-[3px] md:gap-1 text-[#999] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                            <MdFavoriteBorder className='text-[15px] lg:text-[30px]'/>
                            <span className='lg:text-base lg:font-black text-[8px] font-normal'>Most Popular</span>
                        </a>
                    </div>
                    <div className="item flex md:px-3 px-2 lg:px-0 items-center">
                        <a href='/' className='flex flex-col items-center lg:gap-[5px] gap-[3px] md:gap-1 text-[#999] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                            <MdWhatshot className='text-[15px] lg:text-[30px]'/>
                            <span className='lg:text-base lg:font-black text-[8px] font-normal'>Hot </span>
                        </a>
                    </div>
                    <div className="item flex md:px-3 px-2 lg:px-0 items-center">
                        <a href='/' className='flex flex-col items-center lg:gap-[5px] gap-[3px] md:gap-1 text-[#999] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                            <MdFlashOn className='text-[15px] lg:text-[30px]'/>
                            <span className='lg:text-base lg:font-black text-[8px] font-normal'>Trending </span>
                        </a>
                    </div>
                    <div className="item flex md:px-3 px-2 lg:px-0 items-center">
                        <a href='/' className='flex flex-col items-center lg:gap-[5px] gap-[3px] md:gap-1 text-[#999] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                            <MdVisibility className='text-[15px] lg:text-[30px]'/>
                            <span className='lg:text-base lg:font-black text-[8px] font-normal'>Most Watched</span>
                        </a>
                    </div>
                </div>

                <div className="news--ticker inline-block h-6 lg:h-auto mt-[30px] mx-0 mb-[50px]">
                        <div className="title pt-[11px] px-[30px] pb-[13px] bg-[#1d1d1d] text-white">
                            <h2 className='inline-block my-0 mr-[10px] ml-0 lg:text-base text-[10px] font-normal lg:font-semibold '>News Update</h2>
                            <span className='text-[#ccc] text-[10px] lg:text-sm'>Update 20 minutes ago</span>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Hotlinks