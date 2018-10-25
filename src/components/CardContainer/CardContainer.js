import React, { Component } from 'react';

import './CardContainer.css';

import Card from '../Card/Card';

class CardContainer extends Component {
    state = {
        cards: null
    };

    componentDidMount = () => {
        this.setState({
            cards: [
                { emoji: `🐶` },
                { emoji: `🐱` },
                { emoji: `🦒` },
                { emoji: `🦁️` },
                { emoji: `🐯` },
                { emoji: `🐒` },
                { emoji: `🐭` }
            ]
        });
    };

    render() {
        const cards = this.state.cards ? generateCards(this.state.cards) : null;

        return <div className="cardContainer">{cards}</div>;
    }
}

const generateCards = cards => {
    return cards.map((card, index) => {
        return <Card index={index} emoji={card.emoji} key={index} />;
    });
};

export default CardContainer;
