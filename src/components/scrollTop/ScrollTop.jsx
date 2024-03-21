import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


const ScrollTop = () => {

    const [scrollTop, setScrollTop] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setScrollTop(true);
            }else{
                setScrollTop(false);
            }
        })
    },[]);

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
        <section className='container'>
            {scrollTop && (
            <span className='fixed bottom-12 right-12 h-12 w-12 text-5xl bg-[#ce0000] text-white cursor-pointer hover:text-[#ce0000] hover:bg-white duration-500 ease-in-out flex items-center justify-center rounded-3xl'
            onClick={scrollUp} >
                <FaArrowUp />
            </span>
            )}
            </section>
        </>
    )
}

export default ScrollTop