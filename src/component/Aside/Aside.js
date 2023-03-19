import React, { useEffect } from 'react';
import './Aside.css'
import Profile from '../Profile/Profile';
import AddBreak from '../AddBreak/AddBreak';
import WorkListDetails from '../WorkListDetails/WorkListDetails';
import { useState } from 'react';
import addBreakTimeToLS from '../../utilities/addBreakTimeToLS';
import getBreakTimeFromLS from '../../utilities/getBreakTimeFromLS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Aside = ({ profile, totalTime }) => {

    const [breakTime, setBreakTime] = useState(5);

    const handleAddBreak = (breakTime) => {
        setBreakTime(breakTime);
        addBreakTimeToLS(breakTime);
    }

    useEffect(() => {
        const breakTime = getBreakTimeFromLS();
        setBreakTime(breakTime);
    }, [breakTime])

    const showToast = () => {
        toast("Well Done !",
            {
                style: {

                    backgroundColor: 'red',
                    color: 'white',
                    fontWeight: 600
                },
            }
        )

    };


    return (
        <div className='aside'>
            <Profile profile={profile}></Profile>
            <AddBreak handleAddBreak={handleAddBreak}></AddBreak>
            <WorkListDetails breakTime={breakTime} totalTime={totalTime}></WorkListDetails>
            <div className='aside-buttons'>
                <button className='aside-button'>Show Selected Activities</button>
                <button className='aside-button activity-completed-btn' onClick={showToast}>
                    <p>Activity Completed</p>
                    <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>
                </button>
                <ToastContainer></ToastContainer>
            </div>

        </div >
    );
};

export default Aside;