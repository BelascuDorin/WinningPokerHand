module.exports.evaluate7CardsPokerHand = function(pokerHand){
    if(pokerHand.nrOfCards !== 7 ){
        throw new Error('The poker hand should have only 7 cards.');
    }

    return 1;
};