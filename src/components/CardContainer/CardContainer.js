import React, { Component } from 'react';

import './CardContainer.css';

import Card from '../Card/Card';

const cards = [
    { emoji: `🐶`, backgroundColor: '#ECCE8E' },
    { emoji: `🐱`, backgroundColor: '#A9F0D1' },
    { emoji: `🦒`, backgroundColor: '#D3C1C3' },
    { emoji: `🦁️`, backgroundColor: '#B5BFA1' },
    { emoji: `🐯`, backgroundColor: '#F9C80E' },
    { emoji: `🐒`, backgroundColor: '#A5D8FF' },
    { emoji: `🐭`, backgroundColor: '#333333' }
];

class CardContainer extends Component {
    state = {
        cards: null,
        currentCard: null
    };

    componentDidMount = () => {
        this.setState({
            // currentCard: Math.floor(Math.random() * cards.length),
            currentCard: 0,
            cards
        });
        this.init();
    };

    /*  Attaches keydown event handler
    */
    init = () => {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    /*  Up and Left arrow trigger previous card;
        Down and Right arrow trigger next card;
    */
    handleKeyDown = e => {
        const key = e.keyCode;

        switch (key) {
            case 37:
            case 38:
                this.previousItem();
                return;
            case 39:
            case 40:
                this.nextItem();
                return;
            default:
                return;
        }
    };

    previousItem = () => {
        console.log('previous item');
    };

    nextItem = () => {
        console.log('next item');
    };

    render() {
        let { cards, currentCard } = this.state;

        return (
            <div className="cardContainer">
                {cards}
            </div>
        );
    }
}

export default CardContainer;
