import React from 'react'

const AdvertLarge = () => {
    return (
        <>
            <section className="container advertLarge my-[60px] mx-2 lg:mx-[30px]">
                <div className="advertLargeWrapper flex items-center justify-center cursor-pointer">
                        <img className='w-3/4 ' src={require('../../assets/ad-970x90-65e4d2dde6e3e.webp')} alt="Advertisment" />
                </div>
            </section>
        </>
    )
}

export default AdvertLarge