const Enum = require('enum')

const HandEvaluationScale = new Enum(['ROYAL_FLASH', 'STRAIGHT_FLUSH', 'FOUR_OF_A_KIND', 'FULL_HOUSE', 'FLUSH', 'STRAIGHT', 'THREE_OF_A_KIND', 'TWO_PAIR', 'PAIR', 'HIGH_CARD'], { freeze: true });

module.exports.getEvaluation = function(degree){return HandEvaluationScale.get(degree).value};
