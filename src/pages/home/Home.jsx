import React from 'react';
import MainContent from '../../components/mainContent/MainContent';
import MainBody from '../../components/mainBody/MainBody';
import MainBodyTwo from '../../components/mainBodyTwo/MainBodyTwo';
import MainBodyThree from '../../components/mainBodyThree/MainBodyThree';
import AudioVideo from '../../components/audioVideo/AudioVideo';
import AdvertLarge from '../../components/advertLarg/AdvertLarge';
import MainBodyFour from '../../components/mainBodyFour/MainBodyFour';
import FoodRecipe from '../../components/foodRecipe/FoodRecipe';
import PhotoGal from '../../components/photoGal/PhotoGal';
import MainLayout from '../../components/mainLayout/MainLayout';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta 
                    name="description"
                    content="The US News default home page. See more articles now..."
                />
                <link rel="canonical" href="https://blog-44.vercel.app/" />
            </Helmet>
            <MainLayout>
                <div className=" homeWrapper relative  lg:max-w-[1200px] my-0 mx-auto bg-[#fff] shadow-md">
                    <MainContent/>
                    <MainBody/>
                    <MainBodyTwo/>
                    <MainBodyThree/>
                    <AudioVideo/>
                    <AdvertLarge/>
                    <MainBodyFour/>
                    <FoodRecipe/>
                    <PhotoGal/> 
                </div>
            </MainLayout>
        </>
    )
}

export default Home;