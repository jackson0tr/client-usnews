import React from 'react'
import AdvertTop from '../advertTop/AdvertTop'
import NavbarTop from '../navbarTop/NavbarTop'
import NavbarBottom from '../navbarBottom/NavbarBottom'
import Hotlinks from '../hotlinks/Hotlinks'
import Footer from '../footer/Footer'
import ScrollTop from '../scrollTop/ScrollTop'


const MainLayout = ({children}) => {
    return (
        <>
            <NavbarTop/>
            <AdvertTop/>
            <NavbarBottom/>
            <Hotlinks/>
            {children}
            <ScrollTop/>
            <Footer/>
        </>
    )
}

export default MainLayout