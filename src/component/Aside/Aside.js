import React from 'react';
import './Aside.css'
import Profile from '../Profile/Profile';
import AddBreak from '../AddBreak/AddBreak';
import WorkListDetails from '../WorkListDetails/WorkListDetails';
import { useState } from 'react';

const Aside = ({ profile }) => {

    const [breakTime, setBreakTime] = useState(5);

    const handleAddBreak = (breakTime) => {
        setBreakTime(breakTime);
    }

    return (
        <div className='aside'>
            <Profile profile={profile}></Profile>
            <AddBreak handleAddBreak={handleAddBreak}></AddBreak>
            <WorkListDetails breakTime={breakTime}></WorkListDetails>
            <button className='show-selected-works-btn'>Show Selected Works</button>
        </div >
    );
};

export default Aside;