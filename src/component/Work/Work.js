import React from 'react';
import './Work.css'

const Work = ({ work, handleAddToList }) => {
    const { img, name, time } = work;
    return (
        <div className='work'>
            <img src={img} alt={name}></img>
            <div className='work-info'>
                <h3>{name}</h3>
                <p>Estimated Time : {time} min</p>
                <div className='work-buttons'>
                    <button onClick={() => { handleAddToList(work) }} className='add-btn'>Add to List</button>
                    <button className='rmv-btn'>Remove Work</button>
                </div>
            </div>

        </div>
    );
};

export default Work;