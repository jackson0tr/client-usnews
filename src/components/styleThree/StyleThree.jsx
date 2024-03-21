import React from 'react'
import HeadingTitle from '../headingTitle/HeadingTitle'

const StyleThree = () => {
    return (
        <>
                    <section className="widget3 mb-[30px]">
                        <HeadingTitle title='Voting Poll (CheckBox)'/>
                        <div className="pollWidget text-[#f4f4f4] p-5">
                            <div className="title">
                                <h3 className='text-[#333] text-base'>Which was the Soccer World Cup ever in your opinion?</h3>
                            </div>

                            <div className="options border-t border-solid border-[#ccc]">
                                <form className='flex flex-col pt-[15px]'>
                                    <div className="checkBox relative flex items-center justify-between gap-5">
                                        <label className='flex items-center gap-[10px] text-[#555] py-2.5 px-0'>
                                            <input type='checkBox'/>
                                            <span className='cursor-pointer'>Qatar 2022</span>
                                        </label>
                                            <p className='flex items-center justify-between text-white absolute right-0 w-[80px] md:w-[90px] lg:w-[120px] h-3 bg-white mr-[35px] border border-solid border-[#ccc]'>
                                                <span className='w-full h-full bg-[#ce0000]' style={{width: '65%'}}></span>
                                            </p>
                                            <div className="perc text-[#555]">65%</div>
                                    </div>
                                    <div className="checkBox relative flex items-center justify-between gap-5">
                                        <label className='flex items-center gap-[10px] text-[#555] py-2.5 px-0'>
                                            <input type='checkBox'/>
                                            <span className='cursor-pointer'>France 2019</span>
                                        </label>
                                            <p className='flex items-center justify-between text-white absolute right-0 w-[80px] md:w-[90px] lg:w-[120px] h-3 bg-white mr-[35px] border border-solid border-[#ccc]'>
                                                <span className='w-full h-full bg-[#ce0000]' style={{width: '28%'}}></span>
                                            </p>
                                            <div className="perc text-[#555]">28%</div>
                                    </div>
                                    <div className="checkBox relative flex items-center justify-between gap-5">
                                        <label className='flex items-center gap-[10px] text-[#555] py-2.5 px-0'>
                                            <input type='checkBox'/>
                                            <span className='cursor-pointer'>Uk 2017</span>
                                        </label>
                                            <p className='flex items-center justify-between text-white absolute right-0 w-[80px] md:w-[90px] lg:w-[120px] h-3 bg-white mr-[35px] border border-solid border-[#ccc]'>
                                                <span className='w-full h-full bg-[#ce0000]' style={{width: '10%'}}></span>
                                            </p>
                                            <div className="perc text-[#555]">10%</div>
                                    </div>
                                    <button className='bg-[#ce0000] mt-5 text-white py-[3px] px-[15px] max-w-fit border-none duration-500 cursor-pointer hover:bg-[#222]' type="submit">Vote Now</button>
                                </form>
                            </div>
                        </div>
                    </section>

                    <div className="widget3 mb-[30px]">
                        <HeadingTitle title='Voting Poll (Radio)'/>
                        <div className="pollWidget text-[#f4f4f4] p-5">
                            <div className="title">
                                <h3 className='text-[#333] text-base'>Do you think the cost of sending money to mobile phone should be reduced?</h3>
                            </div>
                            <div className="options border-t border-solid border-[#ccc]">
                                <form className='flex flex-col pt-[15px]'>
                                    <div className=" relative flex items-center justify-between gap-5">
                                        <label className='flex items-center gap-[10px] text-[#555] py-2.5 px-0'>
                                            <input type="radio" name="option-1" />
                                            <span className='cursor-pointer'>Yes</span>
                                        </label>

                                        <p className='flex items-center justify-between text-white absolute right-0 w-[80px] md:w-[90px] lg:w-[120px] h-3 bg-white mr-[35px] border border-solid border-[#ccc]'>
                                            <span className='w-full h-full bg-[#ce0000]' style={{width: '55%'}}></span>
                                        </p>
                                        <div className="perc text-[#555]">55%</div>
                                    </div>

                                    <div className=" relative flex items-center justify-between gap-5">
                                        <label className='flex items-center gap-[10px] text-[#555] py-2.5 px-0'>
                                            <input type="radio" name="option-1" />
                                            <span className='cursor-pointer'>No</span>
                                        </label>
                                        <p className='flex items-center justify-between text-white absolute right-0 w-[80px] md:w-[90px] lg:w-[120px] h-3 bg-white mr-[35px] border border-solid border-[#ccc]'>
                                            <span className='w-full h-full bg-[#ce0000]' style={{width: '90%'}}></span>
                                        </p>
                                        <div className="perc text-[#555]">90%</div>
                                    </div>

                                    <div className=" relative flex items-center justify-between gap-5">
                                        <label className='flex items-center gap-[10px] text-[#555] py-2.5 px-0'>
                                            <input type="radio" name="option-1" />
                                            <span className='cursor-pointer'>Average</span>
                                        </label>
                                        <p className='flex items-center justify-between text-white absolute right-0 w-[80px] md:w-[90px] lg:w-[120px] h-3 bg-white mr-[35px] border border-solid border-[#ccc]'>
                                            <span className='w-full h-full bg-[#ce0000]' style={{width: '35%'}}></span>
                                        </p>
                                        <div className="perc text-[#555]">35%</div>
                                    </div>

                                    <button className='bg-[#ce0000] mt-5 text-white py-[3px] px-[15px] max-w-fit border-none duration-500 cursor-pointer hover:bg-[#222]' type="submit">Vote Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default StyleThree