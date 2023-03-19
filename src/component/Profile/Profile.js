import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ profile }) => {
    const { img, firstname, lastname, city, country } = profile;

    return (
        <div>
            <div className='profile'>
                <img src={img} alt={firstname}></img>
                <div className='profile-info'>
                    <h4>{firstname} {lastname}</h4>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <small> {city}, {country}</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;