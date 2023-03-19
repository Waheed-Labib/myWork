import React from 'react';
import './WorkListDetails.css'

const WorkListDetails = ({ breakTime }) => {
    return (
        <div className='work-list-details'>
            <h3>Work List Details</h3>
            <div>
                <p>Total Time : <span>70 min</span></p>
            </div>

            <div>
                <p>Break Time : <span>{breakTime} min</span></p>
            </div>

        </div>
    );
};

export default WorkListDetails;