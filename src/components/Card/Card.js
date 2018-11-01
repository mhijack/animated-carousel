import React, { PureComponent } from 'react';

import './Card.css';

class Card extends PureComponent {
    render() {
        const { index, emoji, flipped } = this.props;

        let style;

        style = flipped
            ? {
                  opacity: 0,
                  transform: `rotate(85deg)`,
                  transitionDuration: `0.7s`,
                  transformOrigin: '0% 0%'
              }
            : {
                  opacity: 1,
                  transform: `rotate(${generateRandomRotateDegree()}deg)`,
                  transitionDuration: `0.3s`,
                  transformOrigin: '0% 0%'
              };
        style.transformOrigin = '0% 0';
        style.animationFillMode = 'forwards';

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
