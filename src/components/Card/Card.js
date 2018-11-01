import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    /*  Only update card if 'flipped' prop changed
    */
    shouldComponentUpdate = (nextProp, nextState) => {
        return nextProp.flipped !== this.props.flipped;
    };

    render() {
        const { index, emoji, flipped, backgroundColor } = this.props;

        let style;

        style = flipped
            ? {
                  opacity: 0,
                  transform: `translate3d(-100px, 0, 0) rotate(45deg)`,
                  transitionDuration: `0.7s`
              }
            : {
                  opacity: 1,
                  transform: `translate3d(0px, 0, 0) rotate(${generateRandomRotateDegree()}deg)`,
                  transitionDuration: `0.3s`
              };
        style.backgroundColor = backgroundColor;
        console.log('card rerendered');
        return (
            <div
                className={`item${index} cardItem`}
                style={{
                    ...style
                }}
            >
                <h1>{emoji}</h1>
            </div>
        );
    }
}

const generateRandomRotateDegree = () => {
    return Math.floor(Math.random() * 10);
};

export default Card;
