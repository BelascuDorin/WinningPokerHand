const findDuplicates = require('array-find-duplicates');
const Card = require('./Card');
const handEvaluator = require('./HandEvaluationScale');
const cardTypes = Card.cardTypes;

function thereAreDuplicatedCards(cards){
    const result = findDuplicates(cards, (a, b) => a.number === b.number && a.type === b.type);
    if(result.length === 0) return 0;
    else return 1;
}

function cardExists(cards, card){
    const exists = cards.find(c => 
        (c.number.value === card.number.value && c.type.value === card.type.value)
    );
    return exists;
}

function getNumbersApparition(cards){
    cardsNumbers = cards.map(card => card.number.value);

    apparition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    cardsNumbers.forEach(n => apparition[n]++);

    return apparition;
}

function has_n_OfTheSameNumber(n, apparition){
    has = false;
    apparition.forEach(a => {
        if(a === n) has = true;
    })
    return has;
}


function isA_RoyalFlash(cards){
    if(hasAllRoyalCards_OfType("CLUB", cards)    ||
       hasAllRoyalCards_OfType("DIAMOND", cards) ||
       hasAllRoyalCards_OfType("SPADE", cards)   ||
       hasAllRoyalCards_OfType("HEART", cards) )
    {
        return true;
    }
    return false;
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

function itsA_StraightFlash(cards){
    isA_StraightFlush = false;
    cardTypes.enums.forEach(type => {
        if(isA_StraightFlash_OfType(type.key, cards)){
            isA_StraightFlush = true;
        }
    })
    return isA_StraightFlush;
};
    function isA_StraightFlash_OfType(type, cards){
        const flushOnly = cards.filter(card => card.type.key === type);
        if(flushOnly.length < 5) return false;

        if(isA_Straight(flushOnly)) return true;
        else return false;
    }

function itsA_FourOfAKind(cards){
    apparition = getNumbersApparition(cards);
    return has_n_OfTheSameNumber(4, apparition);
}

function itsA_FullHouse(cards){
    apparition = getNumbersApparition(cards);
    if(has_n_OfTheSameNumber(2, apparition) && has_n_OfTheSameNumber(3, apparition)) return true;
    else return false;
}

function isAFlash(cards){
    isA_Flush = false;
    cardTypes.enums.forEach(type => {
        if(isAFlash_OfType(type.key, cards)){
            isA_Flush = true;
        }
    })
    return isA_Flush;
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

function isA_Straight(cards){
    apparition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    onlyNumbers = cards.map(card => card.number.value);
    onlyNumbers.forEach(n => apparition[n]++);

    if(isA_A2345_Straight(apparition)) return true;
    else{
        if(isA_Straight_butNot_A2345(apparition)) return true;
        return false;
    }
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
                current = 0;
            }
            i++;
        }

        if(max >= 5)return true;   
        else return false;
    }

function isA_ThreeOfAKind(cards){
    apparition = getNumbersApparition(cards);
    return has_n_OfTheSameNumber(3, apparition);
}  

function isA_TwoPair(cards){
    apparition = getNumbersApparition(cards);

    doubles = 0;
    apparition.forEach(a => {
        if(a === 2) doubles++;
    });

    if(doubles >= 2) return true;
    return false;
}

function isA_APair(cards){
    apparition = getNumbersApparition(cards);
    return has_n_OfTheSameNumber(2, apparition);
}

module.exports.evaluate7CardsPokerHand = function(pokerHand){
    
    if(pokerHand.cards.length !== 7 ){
        throw new Error('The poker hand should have only 7 cards.');
    }

    if(thereAreDuplicatedCards(pokerHand.cards) === 1){
        throw new Error('Invalid Hand. There are at least 2 duplicated cards.');
    }

    if(isA_RoyalFlash(pokerHand.cards))     return handEvaluator.getEvaluation("ROYAL_FLASH");
    if(itsA_StraightFlash(pokerHand.cards)) return handEvaluator.getEvaluation("STRAIGHT_FLUSH")
    if(itsA_FourOfAKind(pokerHand.cards))   return handEvaluator.getEvaluation("FOUR_OF_A_KIND");
    if(itsA_FullHouse(pokerHand.cards))     return handEvaluator.getEvaluation("FULL_HOUSE");  
    if(isAFlash(pokerHand.cards))           return handEvaluator.getEvaluation("FLUSH");
    if(isA_Straight(pokerHand.cards))       return handEvaluator.getEvaluation("STRAIGHT");
    if(isA_ThreeOfAKind(pokerHand.cards))   return handEvaluator.getEvaluation("THREE_OF_A_KIND");
    if(isA_TwoPair(pokerHand.cards))        return handEvaluator.getEvaluation("TWO_PAIR");
    if(isA_APair(pokerHand.cards))          return handEvaluator.getEvaluation("PAIR");
    
    return handEvaluator.getEvaluation("HIGH_CARD")
};