import React from 'react';
import './WorkListDetails.css'

const WorkListDetails = ({ breakTime, totalTime }) => {
    return (
        <div className='work-list-details'>
            <h3>Activity List Details</h3>
            <div>
                <p>Total Time : <span>{totalTime} min</span></p>
            </div>

            <div>
                <p>Break Time : <span>{breakTime} min</span></p>
            </div>

        </div>
    );
};

export default WorkListDetails;