const winningHand = require('../winningHand');
const hg = require('./handsGenerator');
const Card = require('../Card');
const handEvaluator = require('../HandEvaluationScale');

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
    const ROYAL_FLASH = handEvaluator.getEvaluation("ROYAL_FLASH");
    
    it('should evaluate correctly CLUB Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType("CLUB"));
        expect(e).toBe(ROYAL_FLASH);
    });

    it('should CLUB Flash Hand (missing royal cards) as NOT a ROYAL FLASH', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getFlash_Hand_OfType("CLUB"));
        expect(e).not.toBe(ROYAL_FLASH);
    });

    it('should evaluate correctly DIAMOND Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType("DIAMOND"));
        expect(e).toBe(ROYAL_FLASH);
    });

    it('should evaluate correctly SPADE Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType("SPADE"));
        expect(e).toBe(ROYAL_FLASH);
    });

    it('should evaluate correctly HEART Royal Flush', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getRoyalFlash_Hand_OfType("HEART"));
        expect(e).toBe(ROYAL_FLASH);
    });
});

describe('Straight Flash', () => { 
    const STRAIGHT_FLUSH = handEvaluator.getEvaluation("STRAIGHT_FLUSH");

    it('should evaluate correctly CLUB straight FLash', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getStraightFlash_Hand_OfType("CLUB"));
        expect(e).toBe(STRAIGHT_FLUSH);
    });

    it('should evaluate correctly A2345 straight FLash', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.get_A2345_StraightFlash_Hand_OfType("CLUB"));
        expect(e).toBe(STRAIGHT_FLUSH);
    });

    it('should NOT evaluate CLUB_FLUSH (NOT straight) as CLUB_STRAIGHT_FLASH', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getFlash_Hand_OfType("CLUB"));
        expect(e).not.toBe(STRAIGHT_FLUSH);
    });

    it('should evaluate correctly DIAMOND straight FLash', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getStraightFlash_Hand_OfType("DIAMOND"));
        expect(e).toBe(STRAIGHT_FLUSH);
    });

    it('should evaluate correctly SPADE straight FLash', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getStraightFlash_Hand_OfType("SPADE"));
        expect(e).toBe(STRAIGHT_FLUSH);
    });

    it('should evaluate correctly HEARTH straight FLash', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.getStraightFlash_Hand_OfType("HEART"));
        expect(e).toBe(STRAIGHT_FLUSH);
    });
});

describe('Four of a kind', () => {
    const FOUR_OF_A_KIND = handEvaluator.getEvaluation("FOUR_OF_A_KIND");

    it('should evaluate correctly 4 of 4 as FOUR_OF_A_KIND', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.get_FourOfAKind_OfNumber("4"));
        expect(e).toBe(FOUR_OF_A_KIND);
    });

    it('should evaluate correctly 4 of J as FOUR_OF_A_KIND', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.get_FourOfAKind_OfNumber("J"));
        expect(e).toBe(FOUR_OF_A_KIND);
    });


    it('should NOT evaluate correctly 3 of 10 as FOUR_OF_A_KIND', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.get_ThreeOfAKind_OfNumber("10"));
        expect(e).not.toBe(FOUR_OF_A_KIND);
    });
});

describe('Full House', () => {
    const FULL_HOUSE = handEvaluator.getEvaluation("FULL_HOUSE");

    it('should evaluate correctly a full house', () => {
        const e = winningHand.evaluate7CardsPokerHand(hg.get_FullHouse());
        expect(e).toBe(FULL_HOUSE);
    });
});