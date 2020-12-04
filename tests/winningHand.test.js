const Enum = require('enum')

const winningHand = require('../winningHand');
const CardTypes = new Enum(['CLUB', 'DIAMOND', 'SPADE', 'HEARTH']);
const CardNumbers = new Enum(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);

describe('evaluateHandOfCards', () => { // Group the tests together 
    function getValidHandOfCards() {

        return {
            nrOfCards: 7,
            cards: [
                { "number": CardNumbers.get('2').value, "type": CardTypes.get('CLUB').value },
                { "number": CardNumbers.get('3').value, "type": CardTypes.get('CLUB').value },
                { "number": CardNumbers.get('4').value, "type": CardTypes.get('CLUB').value },
                { "number": CardNumbers.get('A').value, "type": CardTypes.get('CLUB').value },
                { "number": CardNumbers.get('2').value, "type": CardTypes.get('SPADE').value },
                { "number": CardNumbers.get('4').value, "type": CardTypes.get('DIAMOND').value },
            ]
        };
    }

    it('should work only with a 7 cards hand', () => {
        expect(() => {
            winningHand.evaluate7CardsPokerHand(getValidHandOfCards())
        }).not.toThrow();

        h8 = getValidHandOfCards();
        h8.nrOfCards = 8;
        expect(() => {
            winningHand.evaluate7CardsPokerHand(h8)
        }).toThrow();
    });

    it('should have an evaluation scale returned', () => {
        const evaluationScale = winningHand.evaluate7CardsPokerHand(getValidHandOfCards());
        expect(evaluationScale).not.toBeNull();
    });

    it('should not work with a hands of duplicated cards', () => {
        const duplicateCardInHand = getValidHandOfCards();
        duplicateCardInHand.cards[0] = duplicateCardInHand.cards[1];
        console.log(duplicateCardInHand);
        expect(() => {
            winningHand.evaluate7CardsPokerHand(duplicateCardInHand)
        }).toThrow();
    });
});

