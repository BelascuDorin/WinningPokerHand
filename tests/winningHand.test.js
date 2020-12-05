const winningHand = require('../winningHand');
const Card = require('../Card');


describe('evaluateHandOfCards', () => { // Group the tests together 
    function getValidHandOfCards() {
        return {
            cards: [
                Card.createCard("K", "CLUB"),
                Card.createCard("2", "HEART"),
                Card.createCard("3", "CLUB"),
                Card.createCard("4", "CLUB"),
                Card.createCard("A", "DIAMOND"),
                Card.createCard("2", "SPADE"),
                Card.createCard("4", "SPADE"),
            ]
        };
    }

    function getCLUBRoyalFlashHand(){
        return {
            cards: [
                Card.createCard("10", "CLUB"),
                Card.createCard("3", "HEART"),
                Card.createCard("Q", "CLUB"),
                Card.createCard("A", "CLUB"),
                Card.createCard("J", "CLUB"),
                Card.createCard("K", "CLUB"),
                Card.createCard("K", "SPADE"),
            ]
        };
    }

    it('should work only with a 7 cards hand', () => {
        expect(() => {
            winningHand.evaluate7CardsPokerHand(getValidHandOfCards())
        }).not.toThrow();

        h8 = getValidHandOfCards();
        h8.cards.push(Card.createCard("10", "CLUB"));
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
        expect(() => {
            winningHand.evaluate7CardsPokerHand(duplicateCardInHand)
        }).toThrow();
    });

    it('should evaluate correctly CLUB Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(getCLUBRoyalFlashHand());
        expect(e).toBe(0);
    });

    it('should evaluate correctly CLUB straight FLash', () => {
        const e = winningHand.evaluate7CardsPokerHand(getCLUBRoyalFlashHand());
        expect(e).toBe(1);
    });
});

