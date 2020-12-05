const findDuplicates = require('array-find-duplicates');
const Card = require('./Card');

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
    if(nrOfTypeCards >= 5){
        return 1;
    }

    return 0;
}

function cardExists(cards, card){
    const exists = cards.find(c => 
        (c.number === card.number && c.type === card.type)
    );
    return exists;
}

function hasAllRoyalCards_OfType(type, cards){
    const TEN_OfType = Card.createCard("10", type);
    const J_OfType   = Card.createCard("J", type);
    const Q_OfType   = Card.createCard("Q", type);
    const K_OfType   = Card.createCard("K", type);
    const A_OfType   = Card.createCard("A", type);
    if( cardExists(cards, TEN_OfType) &&
        cardExists(cards, J_OfType)   &&
        cardExists(cards, Q_OfType)   &&
        cardExists(cards, K_OfType)   &&
        cardExists(cards, A_OfType) 
      )
    {
        return 1;
    }
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

    if( hasAllRoyalCards_OfType("CLUB", pokerHand.cards)    ||
        hasAllRoyalCards_OfType("DIAMOND", pokerHand.cards) ||
        hasAllRoyalCards_OfType("SPADE", pokerHand.cards)   ||
        hasAllRoyalCards_OfType("HEART", pokerHand.cards) 
      ){
        return 0;
    }

    if(itsA_Club_StraightFlash(pokerHand.cards)){
        return 1;
    }
    
    return 100;
};