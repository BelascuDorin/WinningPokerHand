const findDuplicates = require('array-find-duplicates');

function thereAreDuplicatedCards(cards){
    const result = findDuplicates(cards, (a, b) => a.number === b.number && a.type === b.type);
    console.log(result.length)    ;
    if(result.length === 0) return 0;
    else return 1;
}

module.exports.evaluate7CardsPokerHand = function(pokerHand){
    if(pokerHand.nrOfCards !== 7 ){
        throw new Error('The poker hand should have only 7 cards.');
    }

    if(thereAreDuplicatedCards(pokerHand.cards) === 1){
        throw new Error('Invalid Hand. There are at least 2 duplicated cards.');
    }

    return 1;
};