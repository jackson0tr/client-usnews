import React from 'react'
import './side.scss'
import Slider from 'react-slick'
import Heading from '../../../common/heading/Heading'
import { gallery } from '../../../../apiData'
import Tpost from '../Tpost/Tpost'
import SocialMedia from '../social/SocialMedia'

const Side =()=>{
    const settings ={
        dots: false,
        infintie: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const category = ['world', 'travel', 'sport', 'fun', 'health', 'fashion', 'business', 'technology']
    return(
        <>
            <Heading title='Stay Connected'/>
            <SocialMedia/>
            <Heading title='Subscribe'/>

            <section className="subscribe">
                <h1 className="title">Subscribe to our New Stories</h1>
                <form action=''>
                    <input type="email" placeholder='Email Address...' />
                    <button>
                        <i className="fa fa-paper-plane"></i> SUBMIT
                    </button>
                </form>
            </section>

            <section className="banner">
                <img src="" alt="" />
            </section>

            <Tpost/>

            <section className="categorys">
                <Heading title='Categorys'/>
                {category.map((val)=>{
                    return(
                        <div className="category category1">
                            <span>{val}</span>
                        </div>
                    )
                })}
            </section>

            <section className="gallery">
                <Heading title='Gallery'/>
                <Slider {...settings}>
                    {gallery.map((val)=>{
                        return(
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </section>
        </>
    )
}

export default Side