import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    render() {
        const { index, emoji } = this.props;

        return (
            <div className={`item${index} cardItem`}>
                <h1>{emoji}</h1>
            </div>
        );
    }
}

const generateRandomRotateDegree = () => {
    return Math.floor(Math.random() * 10);
};

export default Card;
