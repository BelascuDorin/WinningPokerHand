const Enum = require('enum')

const cardTypes = new Enum(['CLUB', 'DIAMOND', 'SPADE', 'HEART'], { freeze: true });
const cardNumbers = new Enum({'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 11, 'Q' : 12, 'K' : 13, 'A' : 14}, { freeze: true });

class Card {
    constructor(number, type) {
        if( ! cardNumbers.isDefined(number)){
            throw new Error('A valid NUMBER for the card should be introduced');
        }

        if( ! cardTypes.isDefined(type)){
            throw new Error('A valid TYPE for the card should be introduced');
        }

        this.number = cardNumbers.get(number);
        this.type= cardTypes.get(type);
    }
}

module.exports.createCard = function(number, type){return new Card(number, type)};
module.exports.cardTypes = cardTypes;
module.exports.cardNumbers = cardNumbers;
