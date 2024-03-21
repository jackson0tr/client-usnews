import React from 'react'
import MainLayout from '../../components/mainLayout/MainLayout'
import Articles from './container/Articles'
import { Helmet } from 'react-helmet-async'

const Article = () => {
    return (
        <>
        <Helmet>
                <title>All articles Page</title>
                <meta 
                    name="description"
                    content="All articles right here. let's read.!"
                />
                <link rel="canonical" href="https://blog-44.vercel.app/blog" />
            </Helmet>
        <MainLayout>
            <div className="relative lg:max-w-[1200px] my-0 mx-auto bg-[#fff] shadow-md">
                <Articles/>
            </div>
        </MainLayout>
        </>
    )
}

export default Article