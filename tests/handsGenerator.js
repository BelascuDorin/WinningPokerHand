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

module.exports.getCLUB_RoyalFlash_Hand = function getCLUB_RoyalFlash_Hand(){
    return {
        cards: [
            Card.createCard("10", "CLUB"),
            Card.createCard("3", "HEART"),
            Card.createCard("Q", "CLUB"),
            Card.createCard("A", "CLUB"),
            Card.createCard("J", "CLUB"),
            Card.createCard("K", "CLUB"),
            Card.createCard("K", "SPADE"),
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