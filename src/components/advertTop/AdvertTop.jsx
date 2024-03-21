import React from 'react'

const AdvertTop = () => {
    return (
        <>
            <section className="container advertTop mt-[30px] px-2 lg:px-[30px] mb-[23px]">
                <div className="advertTopContainer flex items-center justify-between cursor-pointer">
                    <div className="left w-1/4 md:w-1/2 lg:w-1/2 ">
                        <a href='/'>
                            <img src={require('../../assets/logo-65e4d2df733d8.webp')} loading='lazy' alt="USNews Logo" />
                        </a>
                    </div>
                    <div className="right w-1/4 md:w-1/2 lg:w-1/2 ">
                            <img src={require('../../assets/advertttt.gif')} loading='lazy' alt="Advertisement" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdvertTop