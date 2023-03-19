import React from 'react';
import './AddBreak.css'
import { useState } from 'react';

const AddBreak = ({ handleAddBreak }) => {

    return (
        <div className='add-break'>
            <h3>Add A Break</h3>
            <div className='break-options'>
                <button onClick={() => { handleAddBreak(5) }}><span>5</span> m</button>
                <button onClick={() => { handleAddBreak(10) }}><span>10</span> m</button>
                <button onClick={() => { handleAddBreak(15) }}><span>15</span> m</button>
                <button onClick={() => { handleAddBreak(20) }}><span>20</span> m</button>
                <button onClick={() => { handleAddBreak(30) }}><span>30</span> m</button>
            </div>
        </div>
    );
};

export default AddBreak;