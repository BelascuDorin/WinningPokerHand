const Enum = require('enum')

const handEvaluationScale = new Enum(['ROYAL_FLASH', 'STRAIGHT_FLUSH', 'FOUR_OF_A_KIND', 'FULL_HOUSE', 'FLUSH', 'STRAIGHT', 'THREE_OF_A_KIND', 'TWO_PAIR', 'PAIR', 'HIGH_CARD'], { freeze: true });

module.exports.getEvaluation = function(degree){return handEvaluationScale.get(degree).value};
module.exports.handEvaluationScale = handEvaluationScale
