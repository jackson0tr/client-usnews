import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        <>
            <div className=" max-w-[1200px] my-0 mx-auto bg-[#fff] shadow-md">
                <div className="flex justify-center items-center">
                    <div className='loader'></div>
                </div>
            </div>
        </>
    )
}



export default Loader