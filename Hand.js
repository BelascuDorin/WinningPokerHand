const Card = require('./Card');

class Hand {
    constructor(numbers, types) {
        this.cards = [];
        numbers.forEach((number, i) => {
            this.cards.push(Card.createCard(numbers[i], types[i]));
        });
    }
}

module.exports.createNew_7CardsHand = function (numbers, types){ new Hand(numbers, types)};