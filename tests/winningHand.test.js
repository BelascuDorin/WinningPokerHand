const winningHand = require('../winningHand');

describe('evaluateHandOfCards', () =>{ // Group the tests together 
    function getDefaultHandOfCards(){
        return {nrOfCards: 7};
    }

    it('should work only with a 7 cards hand', () => {
        expect(() => {
            winningHand.evaluate7CardsPokerHand(getDefaultHandOfCards())
            }).not.toThrow();

        h8 = getDefaultHandOfCards();
        h8.nrOfCards = 8;
        expect(() => {
            winningHand.evaluate7CardsPokerHand(h8)
            }).toThrow();            
    });

    it('should be an evaluation scale returned', () => {
        const evaluationScale = winningHand.evaluate7CardsPokerHand(getDefaultHandOfCards());
        expect(evaluationScale).not.toBeNull();
    });

    it('should be an evaluation scale returned', () => {
        const evaluationScale = winningHand.evaluate7CardsPokerHand(getDefaultHandOfCards());
        expect(evaluationScale).not.toBeNull();
    });
});

