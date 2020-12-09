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
}

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
}

module.exports.getStraightFlash_Hand_OfType = function getStraightFlash_Hand_OfType(type){
    return {
        cards: [
            Card.createCard("2", type),
            Card.createCard("6", "DIAMOND"),
            Card.createCard("3", type),
            Card.createCard("4", type),
            Card.createCard("5", type),
            Card.createCard("7", "SPADE"),
            Card.createCard("6", type),
        ]
    };
}

module.exports.getFlash_Hand_OfType = function getFlash_Hand_OfType(type){
    return {
        cards: [
            Card.createCard("10", type),
            Card.createCard("3", "HEART"),
            Card.createCard("6", type),
            Card.createCard("A", type),
            Card.createCard("5", type),
            Card.createCard("K", type),
            Card.createCard("K", "SPADE"),
        ]
    };
}