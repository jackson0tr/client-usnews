import React from 'react'
import StyleTwo from '../styleTwo/StyleTwo'
import StyleOne from '../styleOne/StyleOne'
import { Entertainment, Politics } from '../../category'
import StyleThree from '../styleThree/StyleThree'

const MainBodyFour = () => {
    return (
        <>
            <section className="mainBodyFour container flex-col lg:flex-row   py-10 px-[30px]">
                <div className="mainBodyFourWrapper flex-col lg:flex-row flex gap-[25px]">
                    <div className="item flex-[4] flex-col lg:flex-row ">
                        <StyleTwo {...Politics}/>
                    </div>
                    <div className="item flex-[4] flex-col lg:flex-row ">
                        <StyleOne {...Entertainment}/>
                    </div>
                    <div className="item flex-[4] flex-col lg:flex-row ">
                        <StyleThree/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBodyFour