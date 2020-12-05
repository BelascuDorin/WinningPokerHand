const findDuplicates = require('array-find-duplicates');

function thereAreDuplicatedCards(cards){
    const result = findDuplicates(cards, (a, b) => a.number === b.number && a.type === b.type);
    if(result.length === 0) return 0;
    else return 1;
}

function isAFlash_OfType(type, cards){
    nrOfTypeCards = 0;

    cards.forEach(card => {
        if(card.type === type){
            nrOfTypeCards++;
        }
    });

    if(nrOfTypeCards === 5){
        return 1;
    }

    return 0;
}

function hasAllRoyalCards(cards){
    if( cards.find(c => c.number === '10') &&
        cards.find(c => c.number === 'J')  &&
        cards.find(c => c.number === 'Q')  &&
        cards.find(c => c.number === 'K')  &&
        cards.find(c => c.number === 'A') 
      )
    {
        return 1;
    }
}

function itsA_Club_RoyalFlash(cards){
    if(isAFlash_OfType('CLUB', cards) && hasAllRoyalCards(cards))
        return 1;
    else
        return 0;
}

function itsA_Club_StraightFlash(cards){
    return 1;
}



module.exports.evaluate7CardsPokerHand = function(pokerHand){
    
    if(pokerHand.cards.length !== 7 ){
        throw new Error('The poker hand should have only 7 cards.');
    }

    if(thereAreDuplicatedCards(pokerHand.cards) === 1){
        throw new Error('Invalid Hand. There are at least 2 duplicated cards.');
    }

    if(itsA_Club_RoyalFlash(pokerHand.cards)){
        return 0;
    }

    if(itsA_Club_StraightFlash(pokerHand.cards)){
        return 1;
    }
    
    return 100;
};