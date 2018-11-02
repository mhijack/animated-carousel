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

class CardContainer extends Component {
    currentCard = 7;

    state = {
        cards: []
    };

    /*  Initiate app
    */
    componentDidMount = () => {
        this.setState({
            cards
        });
        this.initEventHandler();
    };

    /*  Attaches keydown event handler
    */
    initEventHandler = () => {
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
                return this.previousItem();
            case 39:
            case 40:
                return this.nextItem();
            default:
                return;
        }
    };

    /*  @params: array of cards, index of being flipped
        @returns: a new array with the specified card flipped
    */
    flipCard = (cards, index, flip) => {
        let card = cards[index];
        card = {
            ...card,
            flipped: flip
        };
        return [...cards.slice(0, index), card, ...cards.slice(index + 1)];
    };

    previousItem = () => {
        const { cards } = this.state;
        if (this.currentCard > 0) {
            this.currentCard--;
            this.setState({
                cards: this.flipCard(cards, this.currentCard, true)
            });
        } else {
            return;
        }
    };

    nextItem = () => {
        const { cards } = this.state;

        if (this.currentCard < cards.length) {
            this.setState({
                cards: this.flipCard(cards, this.currentCard, false)
            });
            this.currentCard++;
        } else {
            return;
        }
    };

    render() {
        const cards = this.state.cards.map(card => {
            return <Card key={card.id} {...card} currentCard={this.currentCard} />;
        });

        return <div className="cardContainer">{cards}</div>;
    }
}

export default CardContainer;
