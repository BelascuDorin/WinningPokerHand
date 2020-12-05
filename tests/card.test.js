const Card = require('../Card');

describe('create a new card object', () => { 
    it('should throw an error if the card number is INVALID', () => {
        expect(() => {
            Card.createCard("C", "CLUB");
        }).toThrow();

        expect(() => {
            Card.createCard("1", "SPADE");
        }).toThrow();
    });

    it('should NOT throw an error if the card number is VALID', () => {
        expect(() => {
            Card.createCard("2", "CLUB");
        }).not.toThrow();

        expect(() => {
            Card.createCard("K", "SPADE");
        }).not.toThrow();
    });

    it('should throw an error if the card type is INVALID', () => {
        expect(() => {
            Card.createCard("2", "ARCH");
        }).toThrow();

        expect(() => {
            Card.createCard("4", "ARROW");
        }).toThrow();
    });

    it('should NOT throw an error if the card type is VALID', () => {
        expect(() => {
            Card.createCard("2", "ARCH");
        }).toThrow();

        expect(() => {
            Card.createCard("4", "ARROW");
        }).toThrow();
    });
});