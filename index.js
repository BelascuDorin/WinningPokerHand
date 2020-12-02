const db = require('./db')

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

module.exports.registerUser = function(username){
    if(!username) throw new Error('Username is required.');

    return { id: new Date().getTime(), username: username};
};

module.exports.applyDiscount = function(order){
    const customer = db.getCustomerSync(order.customerId);

    if(customer.points > 10){
        order.totalPrice *= 0.9;
    }
}