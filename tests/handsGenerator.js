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

module.exports.getCLUB_Flash_Hand = function getCLUB_Flash_Hand(){
    return {
        cards: [
            Card.createCard("10", "CLUB"),
            Card.createCard("3", "HEART"),
            Card.createCard("6", "CLUB"),
            Card.createCard("A", "CLUB"),
            Card.createCard("5", "CLUB"),
            Card.createCard("K", "CLUB"),
            Card.createCard("K", "SPADE"),
        ]
    };
}