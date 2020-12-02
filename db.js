module.exports.getCustomerSync = function(id){
    console.log('REading a customer from MongoDB');
    return {id: id, points: 11};
}

module.exports.getCustomer = async function(id){
    return new Promise((resolve, reject) => {
        console.log('REading a customer from MongoDB');
        return {id: id, points: 11};    
    })
}