import React from 'react'
import StyleOne from '../styleOne/StyleOne'
import StyleTwo from '../styleTwo/StyleTwo'
import Widget from '../widgets/Widget'
import { Technology, WorldNews } from '../../category'
import { FaRegEnvelopeOpen } from 'react-icons/fa'
import {RiSendPlaneFill} from 'react-icons/ri'

const MainBody = () => {
    return (
        <>
            <section className="mainBody container flex lg:block lg:flex-row flex-col lg:flex-grow-0 flex-grow p-[30px]">
                <div className="mainBodyWrapper flex lg:flex-row lg:flex-grow-0 flex-col flex-grow  gap-[25px]">
                    <div className="item flex-[4] flex-col lg:flex-row  w-full">
                        <StyleOne {...WorldNews}/>
                    </div>
                    <div className="item flex-[4] flex-col lg:flex-row  w-full">
                        <StyleTwo {...Technology}/>
                    </div>
                    <div className="item flex-[4] flex-col lg:flex-row  w-full">
                        <Widget/>
                    </div>
                </div>

                <div className="advertMiddleWrapper flex-col lg:flex-row lg:flex-grow-0 flex-grow  flex gap-[25px]">
                    <div className="advert flex-[8] mt-[100px] cursor-pointer">
                        <a href='/'>
                            <img className='w-full' src={require('../../assets/advertttt.gif')} loading='lazy' alt="advertisement" />
                        </a>
                    </div>

                    <div className="newsLetter flex-[4] flex-col lg:flex-row   mt-[60px]">
                        <div className="top relative flex items-center justify-between py-3 px-0 border-t-2 border-solid border-[#ce0000] z-0">
                            <h2 className='relative m-0 text-[#ce0000] text-base font-bold uppercase z-0'>Get newsLetter</h2>
                            <FaRegEnvelopeOpen className='icon text-[#777] text-lg cursor-pointer'/>
                        </div>
                        <div className="bottom bg-[#f4f4f4] flex flex-wrap p-5">
                            <div className='bottomWrapper flex flex-col gap-[30px] m-[10px]'>
                                <div className='content'>
                                    <p>Subscribe to our newsletter, to get all new updates. exclusive updates and world news.</p>
                                </div>
                                <form>
                                    <div className="formInput flex items-center justify-center">
                                        <input type="email" name='email' placeholder='E-amil address' autoComplete='off' required className='formControl w-[90%] h-[23px] border-none p-[10px] outline-none bg-[#e8e6e6]'/>
                                        <button type="submit" aria-label='Submit Form' className='button h-10 w-[30px] lg:w-[50px] flex items-center justify-center bg-[#ce0000] cursor-pointer border-none text-white '>
                                            <RiSendPlaneFill className='text-[15px] lg:text-[25px]' />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBody