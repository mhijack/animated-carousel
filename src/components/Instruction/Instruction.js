import React from 'react';

import './Instruction.css';

const Instruction = props => (
    <div className="instruction">
        <p>Use <span className="instruction__button">left &larr; / up &uarr;</span> arrow to go to previous card, and <span className="instruction__button">right &rarr; / bottom &darr;</span> arrow for next card.</p>
    </div>
)

export default Instruction;