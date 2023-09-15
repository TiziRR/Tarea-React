import React from 'react'
import './Login.css'
import zapatillas from './assets/img/zapatillas2.png'

function Login() {
    return (
        <div className='loginPadre'>
            <div className='loginLogo'>
                <h1>Welcome to El-Shoes</h1>
                <p>For better experiencie with your shoes</p>
                <img className='imgZapas' src={zapatillas} alt="" />
            </div>
            <div className='loginSign'>
                <div className='navBar'>
                    <div className='signUp'>
                        <h1>Sign Up</h1>
                        <div className='inputs'>
                            <input className='Email' type="text" placeholder='Email or Phone' />
                            <input className='Full Name' type="text" placeholder='Full Name' />
                            <input className='Password' type="text" placeholder='Password' />
                            <button className='signBut'>Sign Up</button>
                            <div className='facegoogle'>
                                <button className='facebook'><p>Facebook</p></button>
                                <button className='google'><p>Google</p></button>
                            </div>
                            <p className='alreadyP'>Already a account? <a className='sn' href="#">Sign in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login