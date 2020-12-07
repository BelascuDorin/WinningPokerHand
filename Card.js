const Enum = require('enum')

const CardTypes = new Enum(['CLUB', 'DIAMOND', 'SPADE', 'HEART'], { freeze: true });
const CardNumbers = new Enum(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], { freeze: true });

class Card {
    constructor(number, type) {
        if( ! CardNumbers.isDefined(number)){
            throw new Error('A valid NUMBER for the card should be introduced');
        }

        if( ! CardTypes.isDefined(type)){
            throw new Error('A valid TYPE for the card should be introduced');
        }

        this.number = number;
        this.type= type;
    }
}

module.exports.createCard = function(number, type){return new Card(number, type)};
