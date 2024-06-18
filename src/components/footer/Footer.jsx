import React from 'react'
import { FaAngleRight, FaExclamation, FaExpandAlt, FaFacebookF, FaGooglePlusG, FaLinkedin, FaMapMarkedAlt, FaRegEnvelope, FaRegUser, FaTwitter, FaYoutube } from 'react-icons/fa'
import { TfiAngleDoubleRight } from 'react-icons/tfi'
import { BsFillMegaphoneFill, BsTelephoneFill } from 'react-icons/bs'

const Footer = () => {    
    return (
        <>
                <section className="footerTop  flex flex-col lg:flex-row flex-grow lg:flex-grow-0  lg:py-[10px] py-1 px-3 lg:px-[30px] bg-[#1d1d1d]">
                    <div className="footerTopWrapper flex flex-col lg:flex-row   lg:gap-[25px] gap-1 py-2 lg:py-[50px] px-0">
                        <div className="item flex flex-[1] flex-col   gap-1 lg:gap-5">
                            <div className="title flex items-center justify-between text-white border-t-2 border-solid border-white pt-[15px]">
                                <h2 className="font-extrabold text-base uppercase">About Us</h2>
                                <FaExclamation style={{fontSize: '18px'}}/>
                            </div>
                            <div className="about text-[#999]">
                                <div className="content mt-[10px]">
                                    <p className='text-left lg:font-semibold font-normal lg:text-base text-[8px]'>US News it's a biggest newsletter in texas. Has founded by DEV/ Mahmoud Mohamed, To create his project newsletter and put it in protfolio.</p>
                                </div>
                                <div className="action my-5 mx-0">
                                    <a href='/' className="flex items-center font-normal lg:font-normal lg:text-base text-[8px] no-underline gap-[5px] duration-500 border-solid border-b border-[#333] pb-[10px] hover:cursor-pointer hover:text-[#ce0000]">
                                        Read More
                                        <TfiAngleDoubleRight className='text-[8px] lg:text-xs' style={{fontSize: '12px'}}/>
                                    </a>
                                </div>
                                <ul className='list-none m-0 p-0 flex flex-col gap-[10px]'>
                                    <li className='flex items-center gap-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                                        <FaMapMarkedAlt className='icon text-white' style={{fontSize: '15px'}}/>
                                        <span className='font-normal lg:font-medium text-[8px] lg:text-base'>Street, Address, USA</span>
                                    </li>
                                    <li className='flex items-center gap-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                                        <FaRegEnvelope className='icon text-white text-[8px] lg:text-[15px]' style={{fontSize: '15px'}}/>
                                        <a href='/' className='font-normal lg:font-medium text-[8px] lg:text-base'>usnaews@gmail.com</a>
                                    </li>
                                    <li className='flex items-center gap-[15px] duration-500 hover:text-[#ce0000] hover:cursor-pointer'>
                                        <BsTelephoneFill className='icon text-white ptext-[8px] lg:text-[15px]' style={{fontSize: '15px'}}/>
                                        <a href='/' className='font-normal lg:font-medium text-[8px] lg:text-base'>+123 456 (789)</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div className="item flex flex-[1]  basis-[200px] lg:basis-0 flex-col gap-1 lg:gap-5">
                                <div className="title flex items-center justify-between text-white border-t-2 border-solid border-white pt-[15px]">
                                    <h2 className="font-extrabold text-base uppercase">Usefull Info</h2>
                                    <FaExpandAlt style={{fontSize: '18px'}}/>
                                </div>
                                <div className="links list-none m-0 p-0">
                                    <ul className="list-none m-0 p-0">
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Gadgets
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Shop
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Gadgets
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Term and Conditions
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Forums
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Top News of This Week
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Special Recipes    
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]' href='/login'>
                                                <FaAngleRight/>
                                                Login/Register    
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item flex flex-[1]  basis-[200px] lg:basis-0 flex-col gap-1 lg:gap-5">
                                <div className="title flex items-center justify-between text-white border-t-2 border-solid border-white pt-[15px]">
                                    <h2 className="font-extrabold text-base uppercase">Advertisments</h2>
                                    <BsFillMegaphoneFill style={{fontSize: '18px'}}/>
                                </div>
                                <div className="links list-none m-0 p-0">
                                    <ul className="list-none m-0 p-0">
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Post an Add
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Adds Renew
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Price of Advertisments
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Adds Closed
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center no-underline font-normal lg:font-medium text-[8px] lg:text-base text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Monthly or Yearly
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center no-underline font-normal lg:font-medium text-[8px] lg:text-base text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Trial Adds
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'> 
                                            <a href='/' className='flex items-center no-underline font-normal lg:font-medium text-[8px] lg:text-base text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Add Making
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item flex flex-[1]  basis-[200px] lg:basis-0 flex-col gap-1 lg:gap-5">
                                <div className="title flex items-center justify-between text-white border-t-2 border-solid border-white pt-[15px]">
                                    <h2 className="font-extrabold text-base uppercase">Career</h2>
                                    <FaRegUser style={{fontSize: '18px'}}/>
                                </div>
                                <div className="links list-none m-0 p-0">
                                    <ul className="list-none m-0 p-0">
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Available Post
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Career Details
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                How to Apply?
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Freelance Job
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Be a Member
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Apply Now
                                            </a>
                                        </li>
                                        <li className='pt-[7px] border-solid border-b border-[#333]'>
                                            <a href='/' className='flex items-center font-normal lg:font-medium text-[8px] lg:text-base no-underline text-[#999] gap-[5px] cursor-pointer duration-500 hover:text-[#ce0000]'>
                                                <FaAngleRight/>
                                                Send Your Resume
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>                    </div>
                </section>
                <div className="footerBottom flex lg:flex-row flex-col flex-grow lg:flex-grow-0  bg-[#000] h-[80px]">
                    <div className="footerBottomWrapper flex flex-col lg:flex-row  lg:py-[27px] py-1  px-1 lg:px-[30px] text-white items-center " >
                        <div className="left flex flex-col lg:flex-row   pt-[5px] lg:pt-0  items-center">
                            <p className='text-[#999] text-[8px] font-normal lg:font-semibold lg:text-base'>Created by <a href='https://dev-mahmoud.vercel.app/' className='text-red-500 lg:text-base  text-[8px] font-medium lg:font-extrabold uppercase hover:text-[#999] hover:cursor-pointer]'>Mahmoud Mohamed </a>&copy; All Rights Reserved</p>
                        </div>
                        <div className="right flex items-center  gap-1 lg:gap-5">
                            <ul className="nav1 flex items-center p-0 m-0 list-none">
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[10px] font-normal lg:font-medium duration-500 text-[#999] hover:text-[#ce0000] hover:cursor-pointer'>
                                        Home
                                    </a>
                                </li>
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[10px] font-normal lg:font-medium duration-500 text-[#999] hover:text-[#ce0000] hover:cursor-pointer'>
                                        FAQ
                                    </a>
                                </li>
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[10px] font-normal lg:font-medium duration-500 text-[#999] hover:text-[#ce0000] hover:cursor-pointer'>
                                        Support
                                    </a>
                                </li>
                            </ul>
                            <ul className="nav2 flex items-center p-0 m-0 list-none">
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[8px] font-normal lg:font-medium duration-500 text-[#1877F2]  hover:cursor-pointer'>
                                        <FaFacebookF className='text-[10px] lg:text-[18px]'  />
                                    </a>
                                </li>
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[8px] font-normal lg:font-medium duration-500 text-[#08a0e9]  hover:cursor-pointer'>
                                        <FaTwitter className='text-[10px] lg:text-[18px]' />
                                    </a>
                                </li>
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[8px] font-normal lg:font-medium duration-500 text-[#DB4437]  hover:cursor-pointer'>
                                        <FaGooglePlusG className='text-[10px] lg:text-[18px]' />
                                    </a>
                                </li>
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[8px] font-normal lg:font-medium duration-500 text-[#E62117]  hover:cursor-pointer'>
                                        <FaYoutube className='text-[10px] lg:text-[18px]' />
                                    </a>
                                </li>
                                <li className='py-0 px-1 lg:px-[10px]'>
                                    <a href='/' className='lg:text-base text-[8px] font-normal lg:font-medium duration-500 text-[#0077b5]  hover:cursor-pointer'>
                                        <FaLinkedin className='text-[10px] lg:text-[18px]' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer