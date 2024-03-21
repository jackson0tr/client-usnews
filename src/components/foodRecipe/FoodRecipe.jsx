import React from 'react'
import HeadingTitle from '../headingTitle/HeadingTitle'
import BoxOption from '../boxOption/BoxOption'
import { Food } from '../../category'

const FoodRecipe = () => {
    return (
        <>
            <section className="foodRecipe container flex flex-col lg:flex-row  py-[50px] px-[30px]">
                <div className="foodRecipeWrapper flex-col lg:flex-row lg:justify-between flex gap-[25px]">
                    <div className="itemLeft flex-[4] flex-col   flex ">
                        <HeadingTitle title='Foods &amp; Recipes'/>
                        <BoxOption {...Food}/>
                    </div>
                    <div className="itemRight flex flex-col lg:flex-row  flex-[4]">
                        <div className="itemRightWrapper flex items-center h-full justify-center lg:justify-between gap-[25px] p-5 bg-[#f4f4f4]">
                            <div className="advert1">
                                <a href='/'>
                                    <img className='w-full h-full cursor-pointer' src="assets/images/ad-150x150-1-65e63b479d578.webp" alt="ad1" />
                                </a>
                            </div>
                            <div className="advert2">
                                <a href='/'>
                                    <img className='w-full h-full cursor-pointer' src="assets/images/ad-150x150-2-65e63b4f9bbc3.webp" alt="ad2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FoodRecipe