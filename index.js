module.exports.absolute = function(number){
    if(number >= 0) return number;
    return -number;
};

module.exports.greet = function(name){
    return 'Welcome ' + name;
};

module.exports.getCurrencies = function(){
    return ['USD', 'AUD', 'EUR'];
};

module.exports.getProduct = function(productId){
    return { id: productId, price: 10, category: 2};
};