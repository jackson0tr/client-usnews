import React from 'react'

const SocialMedia=()=>{
    return(
        <>
            <section className="social">
                <div className="socBox">
                    <i className="fab fa-facebook-f"></i>
                    <span>15,996 Likes</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-pinterest"></i>
                    <span>4,000 Fans</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-twitter"></i>
                    <span>9,500 Followers</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-instagram"></i>
                    <span>30,000 Followers</span>
                </div>
                <div className="socBox">
                    <i className="fab fa-youtube"></i>
                    <span>3,000 Subscriber</span>
                </div>
            </section>
        </>
    )
}

export default SocialMedia