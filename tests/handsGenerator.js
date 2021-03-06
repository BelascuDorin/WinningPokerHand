const Card = require('../Card');

module.exports.getValid_HandOfCards =  function getValid_HandOfCards() {
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
};
module.exports.getRoyalFlash_Hand_OfType = function getRoyalFlash_Hand_OfType(type){
    return {
        cards: [
            Card.createCard("10", type),
            Card.createCard("3", "DIAMOND"),
            Card.createCard("Q", type),
            Card.createCard("A", type),
            Card.createCard("J", type),
            Card.createCard("7", "SPADE"),
            Card.createCard("K", type),
        ]
    };
};
module.exports.getStraightFlash_Hand_OfType = function getStraightFlash_Hand_OfType(type){
    return {
        cards: [
            Card.createCard("2", type),
            Card.createCard("9", "DIAMOND"),
            Card.createCard("3", type),
            Card.createCard("4", type),
            Card.createCard("5", type),
            Card.createCard("7", "SPADE"),
            Card.createCard("6", type),
        ]
    };
};
module.exports.getFlash_Hand_OfType = function getFlash_Hand_OfType(type){
    return {
        cards: [
            Card.createCard("10", type),
            Card.createCard("3", "HEART"),
            Card.createCard("6", type),
            Card.createCard("A", type),
            Card.createCard("5", type),
            Card.createCard("K", type),
            Card.createCard("7", "SPADE"),
        ]
    };
};
module.exports.get_A2345_StraightFlash_Hand_OfType = function get_A2345_StraightFlash_Hand_OfType(type){
    return {
        cards: [
            Card.createCard("2", type),
            Card.createCard("A", type),
            Card.createCard("4", type),
            Card.createCard("3", type),
            Card.createCard("5", type),
            Card.createCard("6", "DIAMOND"),
            Card.createCard("K", "SPADE"),
        ]
    };
};
module.exports.get_FourOfAKind_OfNumber = function get_FourOfAKind_OfNumber(number){
    return {
        cards: [
            Card.createCard(number, "CLUB"),
            Card.createCard(number, "SPADE"),
            Card.createCard("7", "DIAMOND"),
            Card.createCard(number, "HEART"),
            Card.createCard("5", "CLUB"),
            Card.createCard(number, "DIAMOND"),
            Card.createCard("K", "SPADE"),
        ]
    };
};
module.exports.get_ThreeOfAType_OfNumber = function get_ThreeOfAType_OfNumber(number){
    return {
        cards: [
            Card.createCard(number, "CLUB"),
            Card.createCard("J", "SPADE"),
            Card.createCard("7", "DIAMOND"),
            Card.createCard(number, "HEART"),
            Card.createCard("5", "CLUB"),
            Card.createCard(number, "DIAMOND"),
            Card.createCard("K", "SPADE"),
        ]
    };
};
module.exports.get_FullHouse = function get_FullHouse(){
    return {
        cards: [
            Card.createCard("J", "CLUB"),
            Card.createCard("7", "DIAMOND"),
            Card.createCard("J", "SPADE"),
            Card.createCard("5", "CLUB"),
            Card.createCard("2", "DIAMOND"),
            Card.createCard("7", "HEART"),
            Card.createCard("7", "SPADE"),

        ]
    };
};
module.exports.get_StraightHand = function get_StraightHand(){
    return {
        cards: [
            Card.createCard("2", "CLUB"),
            Card.createCard("3", "DIAMOND"),
            Card.createCard("6", "SPADE"),
            Card.createCard("5", "CLUB"),
            Card.createCard("2", "DIAMOND"),
            Card.createCard("4", "HEART"),
            Card.createCard("7", "SPADE"),

        ]
    };
};

module.exports.get_TwoPair_Of = function get_TwoPair_Of(n1, n2){
    return {
        cards: [
            Card.createCard(n1, "CLUB"),
            Card.createCard(n2, "DIAMOND"),
            Card.createCard("6", "SPADE"),
            Card.createCard(n1, "HEART"),
            Card.createCard("2", "DIAMOND"),
            Card.createCard(n2, "HEART"),
            Card.createCard("7", "SPADE"),

        ]
    };
};
    
module.exports.get_OnePair_Of = function get_OnePair_Of(n1){
    return {
        cards: [
            Card.createCard(n1, "CLUB"),
            Card.createCard(n1, "DIAMOND"),
            Card.createCard("6", "SPADE"),
            Card.createCard("4", "HEART"),
            Card.createCard("2", "DIAMOND"),
            Card.createCard("9", "HEART"),
            Card.createCard("7", "SPADE"),

        ]
    };
};

module.exports.get_HighCard_Hand = function get_HighCard_Hand(){
    return {
        cards: [
            Card.createCard("A", "CLUB"),
            Card.createCard("K", "DIAMOND"),
            Card.createCard("6", "SPADE"),
            Card.createCard("4", "HEART"),
            Card.createCard("2", "DIAMOND"),
            Card.createCard("9", "HEART"),
            Card.createCard("7", "SPADE"),

        ]
    };
};
