import React from 'react'
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa'

const HeadingTitle = ({title}) => {
    return (
        <>
            <div className="headingTitle border-t-2 border-solid border-[#ce0000]">
                <div className="heading flex items-center py-[15px] px-0 justify-between">
                    <span className="title text-lg font-bold text-[#ce0000] uppercase">
                        {title}
                    </span>

                    <div className="icon flex items-center text-[#777] gap-[2px] cursor-pointer">
                        <FaLongArrowAltLeft className='left hover:text-[#ce0000]' style={{fontSize: '20px'}}/>
                        <span className="divider">/</span>
                        <FaLongArrowAltRight className='right hover:text-[#ce0000]' style={{fontSize: '20px'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadingTitle