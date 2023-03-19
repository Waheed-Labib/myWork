import React from 'react';
import './Work.css'

const Work = ({ work }) => {
    const { img, name, time } = work;
    return (
        <div className='work'>
            <img src={img} alt={name}></img>
            <div className='work-info'>
                <h3>{name}</h3>
                <p>Estimated Time : {time} min</p>
                <div className='work-buttons'>
                    <button className='add-btn'>Add to List</button>
                    <button className='rmv-btn'>Remove Work</button>
                </div>
            </div>

        </div>
    );
};

export default Work;