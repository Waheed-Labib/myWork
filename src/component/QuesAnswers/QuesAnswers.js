import React from 'react';
import { useState, useEffect } from 'react';
import QuesAnswer from '../QuesAnswer/QuesAnswer';
import './QuesAnswers.css'

const QuesAnswers = () => {
    const [quesAnswers, setQuesAnswers] = useState([]);

    useEffect(() => {
        fetch('ques-ans.json')
            .then(res => res.json())
            .then(data => setQuesAnswers(data))
    }, [])

    return (
        <div className='ques-answers'>
            {
                quesAnswers.map(quesAnswer => <QuesAnswer quesAnswer={quesAnswer}></QuesAnswer>)
            }
        </div>
    );
};

export default QuesAnswers;