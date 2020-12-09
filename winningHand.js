const findDuplicates = require('array-find-duplicates');
const Card = require('./Card');
const handEvaluator = require('./HandEvaluationScale');

function thereAreDuplicatedCards(cards){
    const result = findDuplicates(cards, (a, b) => a.number === b.number && a.type === b.type);
    if(result.length === 0) return 0;
    else return 1;
}

function isAFlash_OfType(type, cards){
    nrOfTypeCards = 0;

    cards.forEach(card => {
        if(card.type.key === type){
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
        (c.number.value === card.number.value && c.type.value === card.type.value)
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

function isA_A2345_Straight(apparition){
    if(apparition[14] > 0 && 
       apparition[2]  > 0 &&
       apparition[3]  > 0 &&
       apparition[4]  > 0 &&
       apparition[5]  > 0 ) 
    {
        return true;
    }
    else{
        return false;
    }
}

function isA_Straight_butNot_A2345(apparition){
    current = 0;
    max = 0;
    i = 0;
    while(i < apparition.length){
        if(apparition[i] > 0){
            current++;
        }
        else{
            if(current > max) max = current;
        }
        i++;
    }

    if(max >= 5) return true;    
    else return false;
}

function isA_Straight(cards){
    apparition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    cards.forEach(n => apparition[n]++);

    if(isA_A2345_Straight(apparition)) return true;
    else{
        if(isA_Straight_butNot_A2345(apparition)) return true;
        return false;
    }
}

function isA_StraightFlash_OfType(type, cards){
    const flushOnly = cards.filter(card => card.type.key === type).map(card => card.number.value);
    if(flushOnly.length < 5) return false;

    if(isA_Straight(flushOnly)) return true;
    else return false;
}

function itsA_Club_StraightFlash(cards){
    if(isA_StraightFlash_OfType("CLUB", cards)    || 
       isA_StraightFlash_OfType("DIAMOND", cards) ||
       isA_StraightFlash_OfType("SPADE", cards)   ||
       isA_StraightFlash_OfType("HEART", cards))
    {
        return 1;
    }
        
    return 0;
}


module.exports.evaluate7CardsPokerHand = function(pokerHand){
    
    if(pokerHand.cards.length !== 7 ){
        throw new Error('The poker hand should have only 7 cards.');
    }

    if(thereAreDuplicatedCards(pokerHand.cards) === 1){
        throw new Error('Invalid Hand. There are at least 2 duplicated cards.');
    }

    orderedHand = pokerHand.cards.sort( (a, b) => {
        return (a.number.value < b.number.value) ? -1 : 1;
    });

    if( hasAllRoyalCards_OfType("CLUB", pokerHand.cards)    ||
        hasAllRoyalCards_OfType("DIAMOND", pokerHand.cards) ||
        hasAllRoyalCards_OfType("SPADE", pokerHand.cards)   ||
        hasAllRoyalCards_OfType("HEART", pokerHand.cards) 
      ){
        return handEvaluator.getEvaluation("ROYAL_FLASH");
    }

    if(itsA_Club_StraightFlash(pokerHand.cards)){
        return handEvaluator.getEvaluation("STRAIGHT_FLUSH");
    }
    
    return 100;
};