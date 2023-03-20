import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Works.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Works = ({ profile, handleAddToList }) => {
    const { firstname } = profile;

    const [works, setWorks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWorks(data))
    }, [])

    return (
        <div className='works'>
            <div className='works-header'>
                <div className='works-heading'>
                    <h3>Hello, <span className='username'>{firstname} !</span></h3>
                    <h1>What's your plan today?</h1>
                </div>

                <button>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <p>New</p>
                </button>
            </div>

            <div className='works-body'>
                {
                    works.map(work => <Work key={work.id} work={work} handleAddToList={handleAddToList}></Work>)
                }
            </div>

            <div className='show-all-btn-div'>
                <button className='show-all-btn'>Show All</button>
            </div>



        </div>
    );
};

export default Works;