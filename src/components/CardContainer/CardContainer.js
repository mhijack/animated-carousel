import React, { Component } from 'react';

import Card from '../Card/Card';

import './CardContainer.css';

const cards = [
    { id: 0, emoji: `🐶`, backgroundColor: '#ECCE8E', flipped: false },
    { id: 1, emoji: `🐱`, backgroundColor: '#A9F0D1', flipped: false },
    { id: 2, emoji: `🦒`, backgroundColor: '#D3C1C3', flipped: false },
    { id: 3, emoji: `🦁️`, backgroundColor: '#B5BFA1', flipped: false },
    { id: 4, emoji: `🐯`, backgroundColor: '#F9C80E', flipped: false },
    { id: 5, emoji: `🐒`, backgroundColor: '#A5D8FF', flipped: false },
    { id: 6, emoji: `🐭`, backgroundColor: '#333333', flipped: false }
];
const DIRECTION = {
    PREVIOUS: -1,
    NEXT: 1
};

class CardContainer extends Component {
    state = {
        cards: [],
        currentCard: null // saves id of the currentCard (initially 6)
    };

    /*  Initiate app
    */
    componentDidMount = () => {
        this.setState({
            currentCard: 6,
            cards
        });
        this.initEventHandler();
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return this.state.cards !== null;
    }

    /*  Attaches keydown event handler
    */
    initEventHandler = () => {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    /*  @params: String either 'PREVIOUS' or 'NEXT'
        Sets currentCard according to previous or next.
        @returns: void
    */
    setCurrentCard = direction => {
        this.setState(prevState => ({
            currentCard: prevState.currentCard + DIRECTION[direction]
        }));
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
        this.setCurrentCard('PREVIOUS');
    };

    nextItem = () => {
        this.setCurrentCard('NEXT');
    };

    render() {
        const { currentCard } = this.state;
        const cards = this.state.cards.map(card => {
            return <Card key={card.id} {...card} currentCard={currentCard} />;
        });

        return <div className="cardContainer">{cards}</div>;
    }
}

export default CardContainer;
