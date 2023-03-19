import React from 'react';
import './QuesAnswer.css'

const QuesAnswer = ({ quesAnswer }) => {
    const { ques, ans } = quesAnswer;

    return (
        <div>
            <h3>{ques}</h3>
            <p>{ans}</p>
        </div>
    );
};

export default QuesAnswer;