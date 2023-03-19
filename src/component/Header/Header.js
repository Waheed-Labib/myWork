import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {

    return (
        <div className='header'>
            <img src={logo} alt='logo'></img>
            <nav>
                <a href='/home'>Home</a>
                <a href='/about us'>About Us</a>
                <a href='/login'>Log in</a>
                <a href='/signup'>Sign up</a>
            </nav>
        </div>
    );
};

export default Header;