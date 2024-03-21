import React from 'react'
import './footer.scss'

const Footer = () =>{
    return(
        <>
        <footer>
            <div className='container'>
                <div className='box logo'>
                    <img src='' alt=''/>
                    <p>Modular jack is an intresting blog theme</p>
                    <i className='fa fa-envelope'></i>
                    <span>mahmoudmohamed@gmail.com</span>
                    <br/>
                    <i className='fa fa-headphones'></i>
                    <span>+123 456 789</span>
                </div>
                <div className='box'>
                    <h3>SPORTS</h3>
                    <div className='item'>
                        <img src='' alt=''/>
                        <p>Google to boost android securtiy in few days</p>
                    </div>
                    <div className='item'>
                        <img src='' alt=''/>
                        <p>Google to boost android securtiy in few days</p>
                    </div>
                </div>
                <div className='box'>
                    <h3>CRICKET</h3>
                    <div className='item'>
                        <img src='' alt=''/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus fugit ducimus corporis sapiente </p>
                    </div>
                    <div className='item'>
                        <img src='' alt=''/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus fugit ducimus corporis sapiente </p>
                    </div>
                </div>
                <div className='box'>
                    <h3>LABELS</h3>
                    <ul>
                        <li>
                            <span>Boxing</span> <label>(5)</label>
                        </li>
                        <li>
                            <span>Fashion</span> <label>(6)</label>
                        </li>
                        <li>
                            <span>Health</span> <label>(7)</label>
                        </li>
                        <li>
                            <span>Nature</span> <label>(8)</label>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='credit'>
            <div className='container flexSB'>
                <p>&copy; all rights reserved</p>
                <p>Created by Mahmoud Mohamed</p>
            </div>
        </div>
        </>
    )
}

export default Footer