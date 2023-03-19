import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div className='header'>
            {/* <img src={logo} alt='logo'></img> */}
            <div className='website-name'>
                <FontAwesomeIcon className='header-icon' icon={faBicycle}></FontAwesomeIcon>
                <h1>myWork</h1>
            </div>

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