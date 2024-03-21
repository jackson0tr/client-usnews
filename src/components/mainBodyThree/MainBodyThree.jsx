import React from 'react'
import StyleOne from '../styleOne/StyleOne'
import StyleTwo from '../styleTwo/StyleTwo'
import { HealthFitness, LifeStyle } from '../../category'

const MainBodyThree = () => {
    return (
        <>
            <section className="mainBodyThree container flex-col lg:flex-row py-10 px-[30px]">
                <div className="mainBodyThreeWrapper flex-col lg:flex-row flex gap-[25px]">
                    <div className="item flex-[4] flex-col lg:flex-row w-full">
                        <StyleOne {...HealthFitness}/>
                    </div>
                    <div className="item flex-[4] flex-col lg:flex-row w-full">
                        <StyleTwo {...LifeStyle}/>
                    </div>
                    <div className="item flex-[4] w-full"></div>
                </div>
            </section>
        </>
    )
}

export default MainBodyThree