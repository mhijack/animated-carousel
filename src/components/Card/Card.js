import React from 'react';

import './Card.css';

const Card = props => {
    const spanStyle = {
        display: 'block',
        height: '100%',
        width: '100%'
    };

    return (
        <div className={`item${props.index} cardItem`}>
            <h1>{props.emoji}</h1>
        </div>
    );
};

export default Card;
