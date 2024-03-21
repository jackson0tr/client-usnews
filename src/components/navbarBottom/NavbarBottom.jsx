import React, { useState} from 'react'
import { MdKeyboardArrowDown, MdNavigateNext } from 'react-icons/md'
import {FaHouseUser, FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch} from 'react-icons/fa' 
import {HiViewGrid} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import './navbarBottom.css'
import { useNavigate } from 'react-router-dom'

const NavbarBottom = () => {
    const [fix, setFix] = useState(false);
    const [dropdownone, setDropdownone] = useState(false);
    const [dropdowntwo, setDropdowntwo] = useState(false);
    const [dropdownthree, setDropdownthree] = useState(false);

    const handleDropdownone = (e)=>{
        setDropdownone(!dropdownone);
        setDropdowntwo(false);
        setDropdownthree(false);
    }

    const handleDropdowntwo = (e)=>{
        setDropdowntwo(!dropdowntwo);
        setDropdownone(false);
        setDropdownthree(false);
    }

    const handleDropdownthree = (e)=>{
        setDropdownthree(!dropdownthree);
        setDropdownone(false);
        setDropdowntwo(false);
    }

    const handleScroll = () =>{
        if(window.scrollY >= 200) {
            setFix(true);
        }else{
            setFix(false);
        }
    }

    window.addEventListener('scroll', handleScroll);

    const [isActive, setIsActive] = useState(false);

    const handleSearchClick = () => {
        setIsActive(true);
    };

    const handleCloseClick = () => {
        setIsActive(false);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSearchTerm = (e) =>{
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <div className={fix ? ' fixed w-full top-0  z-[9999] bg-[#ce0000]': 'navbarBottom  bg-[#ce0000] h-[60px]'}>
                <div className="navbarBottomWrapper relative w-full flex  items-center py-5 px-[30px] text-white justify-between">
                    <div className="item relative flex items-center cursor-pointer" onClick={handleDropdowntwo}>
                        <span className='lg:text-base text-[10px]'>World's News</span>
                        <MdKeyboardArrowDown className='lg:text-[20px] text-[8px]' />
                        {dropdowntwo && (
                            <div className="dropDownMenu2 absolute bg-white lg:left-[0px] left-[-30px] p-[5px] top-10 lg:w-[1145px] w-[390px] md:w-[800px] h-[300px] lg:p-5 shadow-md border-b-2 border-solid border-[#ce0000] z-[1] ">
                                <div className="dropDownMenu2Wrapper flex">
                                    <div className="left flex lg:flex-[1.9] flex-[1] flex-col">
                                        <div className="item flex items-center text-[8px] text-[#666] pb-5 duration-500 hover:text-[#ce0000]">
                                            <span className='text-[8px] md:text-sm'>All</span>
                                            <MdNavigateNext className='lg:text-[20px] text-[8px]' />
                                        </div>
                                        <div className="item flex items-center text-[#666] text-[8px] pb-5 duration-500 hover:text-[#ce0000]">
                                            <span className='text-[8px] md:text-sm'>Latin America</span>
                                            <MdNavigateNext  className='lg:text-[20px] text-[8px]' />
                                        </div>
                                        <div className="item flex items-center text-[#666] text-[8px] pb-5 duration-500 hover:text-[#ce0000]">
                                            <span className='text-[8px] md:text-sm'>Africa</span>
                                            <MdNavigateNext  className='lg:text-[20px] text-[8px]' />
                                        </div>
                                        <div className="item flex items-center text-[#666] text-[8px] pb-5 duration-500 hover:text-[#ce0000]">
                                            <span className='text-[8px] md:text-sm'>Middle East</span>
                                            <MdNavigateNext  className='lg:text-[20px] text-[8px]' />
                                        </div>
                                        <div className="item flex items-center text-[#666] text-[8px] pb-5 duration-500 hover:text-[#ce0000]">
                                            <span className='text-[8px] md:text-sm'>Europe</span>
                                            <MdNavigateNext  className='lg:text-[20px] text-[8px]' />
                                        </div>
                                    </div>
                                    <div className="right flex-[10] flex items-center flex-col ">
                                        <div className="rightTop flex items-center justify-around gap-[15px] ">
                                            <div className="item flex flex-col lg:w-[220px] md:w-[130px] w-[50px] text-[#666]">
                                                <div className="img relative">
                                                    <a href="/">
                                                        <img className='relative w-full object-cover' src={require("../../assets/banner-01-65e5fa3e5ad54.webp")} loading='lazy' alt="photo" />
                                                    </a>
                                                </div>
                                                <span className="title text-[#333] lg:font-normal lg:text-[14px] text-[10px] font-bold duration-500 hover:text-[#ce0000]">
                                                    It is a long established fact that a reader will be distracted by
                                                </span>
                                            </div>
                                            <div className="item flex flex-col lg:w-[220px] md:w-[130px] w-[50px] text-[#666]">
                                                <div className="img relative">
                                                    <a href="/">
                                                        <img className='relative w-full  object-cover' src={require("../../assets/banner-02-65e5fa3d68a6a.webp")} loading='lazy' alt="photo" />
                                                    </a>
                                                </div>
                                                <span className="title text-[#333] lg:font-normal lg:text-[14px] text-[10px] font-bold duration-500 hover:text-[#ce0000]">
                                                    It is a long established fact that a reader will be distracted by
                                                </span>
                                            </div>
                                            <div className="item flex flex-col lg:w-[220px] md:w-[130px] w-[50px] text-[#666]">
                                                <div className="img relative">
                                                    <a href="/">
                                                        <img className='relative  w-full object-cover' src={require("../../assets/banner-03-65e4d264b8d80.webp")} loading='lazy' alt="photo" />
                                                    </a>
                                                </div>
                                                <span className="title text-[#333] lg:font-normal lg:text-[14px] text-[10px] font-bold duration-500 hover:text-[#ce0000]">
                                                    It is a long established fact that a reader will be distracted by
                                                </span>
                                            </div>
                                            <div className="item flex flex-col lg:w-[220px] md:w-[130px] w-[50px] text-[#666]">
                                                <div className="img relative">
                                                    <a href="/">
                                                        <img className='relative  w-full object-cover' src={require("../../assets/banner-04-65e4d264a7fdb.webp")} loading='lazy' alt="photo" />
                                                    </a>
                                                </div>
                                                <span className="title text-[#333] lg:font-normal lg:text-[14px] text-[10px] font-bold duration-500 hover:text-[#ce0000]">
                                                    It is a long established fact that a reader will be distracted by
                                                </span>
                                            </div>
                                        </div>

                                        <div className="rightBottom flex items-center justify-center text-[#222] pt-[50px] gap-[5px] cursor-pointer">
                                            <div title='Previous' className="prev hover:text-[#ce0000]">
                                                <FaLongArrowAltLeft className='lg:text-[18px] text-[8px]'/>
                                            </div>
                                            <div title='View All' className="all hover:text-[#ce0000]">
                                                <HiViewGrid className='lg:text-[18px] text-[8px]'/>
                                            </div>
                                            <div title='Next' className="next hover:text-[#ce0000]">
                                                <FaLongArrowAltRight className='lg:text-[18px] text-[8px]'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="item relative flex  items-center cursor-pointer" onClick={handleDropdownone}>
                        <span className='lg:text-base text-[10px]'>Home</span>
                        <MdKeyboardArrowDown className='lg:text-[20px] text-[8px]'/>
                        {dropdownone &&(
                            <div className="dropDownMenu1 absolute top-10 w-40 p-[15px] flex flex-col bg-white text-[#666] border-b-2 border-solid border-[#ce0000] shadow-md z-[1] ">
                                <span>
                                    <a href='/' className='flex items-center pb-[18px] text-[10px] lg:text-base hover:text-[#ce0000]'>Home
                                        <FaHouseUser className='text-[20px]  text-[#ce0000] pl-1' />
                                    </a>
                                </span>
                                <span className='aactive'>  
                                    <a href='/' className='flex items-center pb-[18px] lg:text-base hover:text-[#ce0000] text-[10px]'>Home Boxed</a>
                                </span>
                                <span>
                                    <a href='/' className='flex items-center pb-[18px] lg:text-base hover:text-[#ce0000] text-[10px]' >Home Decor</a>
                                </span>
                                <span>
                                    <a href='/' className='flex items-center pb-[18px] lg:text-base hover:text-[#ce0000] text-[10px]'>Home Lighting</a>
                                </span>
                                <span>
                                    <a href='/' className='flex items-center pb-[18px] lg:text-base hover:text-[#ce0000] text-[10px]'> Home Versions  
                                        <MdNavigateNext className='lg:text-[20px] text-[8px]' />
                                    </a>
                                </span>
                                <span>
                                    <a href='/' className='flex items-center pb-[18px] lg:text-base hover:text-[#ce0000] text-[10px]'> Menu Versions 
                                        <MdNavigateNext className='lg:text-[20px] text-[8px]' />
                                    </a>
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="item relative flex items-center cursor-pointer">
                        <a href='/blog' className='lg:text-base text-[10px] px-[2px]'>All Blogs</a>
                    </div>
                    <div className="item relative flex items-center cursor-pointer" onClick={handleDropdownthree}>
                        <span className='lg:text-base text-[10px] px-[2px]'>Category</span>
                        <MdKeyboardArrowDown className='lg:text-[20px] text-[8px]'/>
                    
                        {dropdownthree &&(
                            <div className="dropDownMenu3 absolute bg-white lg:w-[1145px] w-[400px] md:right-[-197px] md:w-[800px] top-10 lg:right-[-148px] right-[-95px] lg:h-[310px] md:h-[310px] h-[500px] p-4 shadow-md border-b-2 border-solid border-[#ce0000] z-[1]">
                                <div className="dropDownMenu3Wrapper flex pl-[14px] lg:pl-5">
                                    <div className="col flex flex-col lg:w-[200px] w-[90px]">
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline lg:text-[14px] text-[10px] my-2.5 mx-0">World's News</a>
                                            <ul className='list list-none p-0 m-0'>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">US &amp; Canada</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Europe</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Africa</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Asia</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Middle East</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Europe Business</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col flex flex-col lg:w-[200px] md:w-44 w-[90px]">
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Documentation</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Featured Documentation</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">People &amp; Power</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Rebel Education</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Rewind</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Fault Lines</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">News 360 Degree World</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col flex flex-col lg:w-[200px] md:w-44 w-[90px]">
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Sports</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Soccer</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Cricket</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Hocky</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Movies</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Hollywood</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Dollywood</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col flex flex-col lg:w-[200px] md:w-44 w-[90px]">
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Business Management</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">US Business</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Middle East Business</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Europe Business</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Weather</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">North Pole</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">South Pole</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col flex flex-col lg:w-[200px] md:w-44 w-[90px]">
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold text-[10px] no-underline my-2.5 mx-0">Education</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Africa Child Education</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Bangladeshi Education</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Middle East Education</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Health</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Africa Poor Child Health</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Fitness and Health</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="col flex flex-col lg:w-[200px] md:w-44 w-[90px]">
                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Humanities</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Help For Syrian Refugees</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Help For Palestine Children</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Help For African Children</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="item flex flex-col items-start mb-5">
                                            <a href='/' className="title text-[#222] lg:text-base font-bold no-underline text-[10px] my-2.5 mx-0">Animals</a>
                                            <ul className="list list-none p-0 m-0">
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">African Animals</a>
                                                </li>
                                                <li className='p-[5px]'>
                                                    <a className='no-underline text-[#666] font-medium my-2.5 lg:text-[14px] text-[10px] hover:text-[#ce0000] hover:duration-500' href="#">Australian Animals</a>
                                                </li>
                                            </ul>
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="search relative p-[3px] flex justify-center items-center bg-[#f4f4f4] rounded-[25px] cursor-pointer shadow-md z-10">
                        <div>
                            <FaSearch className={`searchBtn flex items-center text-[18px] text-[#ce0000] duration-500 ease-in-out hover:text-[#444] ${isActive ? 'activet ' : ''}`}
                            onClick={handleSearchClick}
                            />
                        </div>
                        <IoMdClose className={`closeBtn flex duration-500 opacity-0 invisible text-[18px]  ease-in-out items-center pl-1 text-[#ce0000] hover:text-[#222] ${isActive ? 'activet' : ''}`}
                        onClick={handleCloseClick}
                        />
                    </div>
                    <div className={`searchBox right-full lg:pl-[25px] pl-2 invisible  absolute lg:w-[1250px] md:w-[800px] lw-[400px] w-[390px] h-[50px] flex items-center justify-center duration-500 ease-in-out bg-[#ce0000] ${isActive ? 'activet ' : ''}`}>
                        <form className='rounded-[25px] w-full border-none outline-none text-[#333] font-medium bg-transparent ' onSubmit={()=> navigate(`/search/${searchTerm}`)}>
                    <input type="text" className='searchInput rounded-[25px] pl-3 flex h-[30px] w-full border-none outline-none text-[#333] font-medium bg-[#f4f4f4] ' placeholder='Search here...' 
                    autoFocus
                    onChange={(e)=> handleSearchTerm(e)} 
                    />
                        </form>
                    </div>
                </div>
                </div>
        </>
    )
}

export default NavbarBottom