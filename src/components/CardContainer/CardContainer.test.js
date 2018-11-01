const cards = [
    { id: 0, emoji: `🐶`, backgroundColor: '#ECCE8E', flipped: false },
    { id: 1, emoji: `🐱`, backgroundColor: '#A9F0D1', flipped: false },
    { id: 2, emoji: `🦒`, backgroundColor: '#D3C1C3', flipped: false },
    { id: 3, emoji: `🦁️`, backgroundColor: '#B5BFA1', flipped: false },
    { id: 4, emoji: `🐯`, backgroundColor: '#F9C80E', flipped: false },
    { id: 5, emoji: `🐒`, backgroundColor: '#A5D8FF', flipped: false },
    { id: 6, emoji: `🐭`, backgroundColor: '#333333', flipped: false }
];

const flipCard = (cards, id, flip) => {
    return cards.map(card => {
        return card.id === id ? { ...card, flipped: !card.flipped } : card;
    });
};

describe('testing flipCard function', () => {
    test('flip first card', () => {
        expect(flipCard(cards, 0)[0].flipped).toBe(true);
    });

    test('flip first card twice', () => {
        expect(flipCard(flipCard(cards, 0), 0)[0].flipped).toBe(false);
    });
});
