const winningHand = require('../winningHand');
const hg = require('./handsGenerator');
const Card = require('../Card');

describe('evaluateHandOfCards', () => { // Group the tests together 
    it('should work only with a 7 cards hand', () => {
        expect(() => {
            winningHand.evaluate7CardsPokerHand(hg.getValid_HandOfCards())
        }).not.toThrow();

        h8 = hg.getValid_HandOfCards();
        h8.cards.push(Card.createCard("10", "CLUB"));
        expect(() => {
            winningHand.evaluate7CardsPokerHand(h8)
        }).toThrow();
    });

    it('should have an evaluation scale returned', () => {
        const evaluationScale = winningHand.evaluate7CardsPokerHand(hg.getValid_HandOfCards());
        expect(evaluationScale).not.toBeNull();
    });

    it('should not work with a hands of duplicated cards', () => {
        const duplicateCardInHand = hg.getValid_HandOfCards();
        duplicateCardInHand.cards[0] = duplicateCardInHand.cards[1];
        expect(() => {
            winningHand.evaluate7CardsPokerHand(duplicateCardInHand)
        }).toThrow();
    });
});

describe('Royal Flash', () => { 
    it('should evaluate correctly CLUB Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType("CLUB"));
        expect(e).toBe(0);
    });

    it('should CLUB Flash Hand (missing royal cards) as NOT a ROYAL FLASH', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getCLUB_Flash_Hand());
        expect(e).not.toBe(0);
    });

    it('should evaluate correctly DIAMOND Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType("DIAMOND"));
        expect(e).toBe(0);
    });
});


describe('Straight Flash', () => { 
    // it('should evaluate correctly CLUB straight FLash', () => {
    //     const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType());
    //     expect(e).toBe(1);
    // });
});

