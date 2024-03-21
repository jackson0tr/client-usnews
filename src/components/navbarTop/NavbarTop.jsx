import React, { useState} from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {RxCaretDown} from 'react-icons/rx'
import { logout } from '../../store/actions/user'



const NavbarTop = () => {

  const [dropDown, setDropDown] = useState(false);
  
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userState = useSelector((state)=> state.user);

    const logoutHandler = () =>{
      dispatch(logout());
    }

    
    
  return (
    <>
      <div className=" navbarTop  bg-[#111] w-full h-[55px]">
        <div className="navbarContainer flex py-[12.5px] lg:px-[30px] px-[12.5px]  items-center justify-between">
          
          <div className="right relative flex items-center lg:gap-[15px] md:gap-2 gap-1 justify-center">
            <div className="item text-white items-center flex cursor-pointer duration-500 hover:text-[#777]">
            
              
              {
                userState.userInfo ? (
                  <div className="text-gray-400 items-center gap-y-3 flex flex-col lg:flex-row gap-x-2 font-semibold">
                    <div className="relative group">
                        <div className="flex flex-col items-center">
                          <button className='flex items-center gap-x-1 lg:mt-0 border-2 border-red-600 px-6 py-1 rounded-full text-red-600 bg-slate-50 font-semibold hover:bg-red-600 hover:text-slate-50 transition-all duration-300'
                          onClick={()=> setDropDown(!dropDown)}>
                            <span>
                              Account
                            </span>
                              <RxCaretDown className='sm:text-[10px]' style={{fontSize:'13px'}}/>
                          </button>
                          <div className={`${dropDown ? "block" : "hidden"}
                          lg:hidden transition-all duration-500 pt-1 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                            <ul className='bg-slate-50 text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
                                {
                                  userState?.userInfo?.admin &&(
                                    <button 
                                    onClick={()=> navigate("/admin")} type='button'
                                    className='hover:bg-red-600 hover:text-slate-50 px-4 py-1 text-red-600'>
                                        Admin Dashboard
                                    </button>
                                  ) 
                                } 
                                <button onClick={()=> navigate(`/profile`)} type='button'
                                className='hover:bg-red-600 hover:text-slate-50 px-4 py-1 text-red-600'>
                                    Profile Page
                                </button>
                                <button onClick={logoutHandler} type='button'
                                className='hover:bg-red-600 hover:text-slate-50 px-4 py-1 text-red-600'>
                                    Logout
                                </button>
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
                ) : (
                  <button onClick={()=> navigate("/login")} type='button'
                  className=' lg:mt-0 border-2 bg-slate-50 border-red-600 px-6 py-1 rounded-full text-red-600 font-semibold hover:bg-red-600 hover:text-slate-50'>
                      LogIn
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarTop;