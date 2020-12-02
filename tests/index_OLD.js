const index = require('../index');
const db = require('../db');

// describe('absolute', () =>{ // Group the tests together 
//     it('should return a positive number  if input is positive', () => {
//         const result = index.absolute(1);
//         expect(result).toBe(1);
//     });
    
//     it('should return a positive number  if input is negative', () => {
//         const result = index.absolute(-1);
//         expect(result).toBe(1);
//     });
    
//     it('should return zero number if input is zero', () => {
//         const result = index.absolute(0);
//         expect(result).toBe(0);
//     });
// });

// describe('greet', () => {
//     it('should return the greeting message', () => {
//         const result = index.greet('Dorin');
//         expect(result).toMatch(/Dorin/);
//     });
// });

// describe('getCurrencies', () => {
//     it('should return supported currencies', () => {
//         const result = index.getCurrencies();

//         // Too general
//         expect(result).toBeDefined();
//         expect(result).not.toBeNull();

//         // To specific
//         expect(result[0]).toBe('USD');
//         expect(result[1]).toBe('AUD');
//         expect(result[2]).toBe('EUR');
//         expect(result.length).toBe(3);

//         // Proper way
//         expect(result).toContain('USD');
//         expect(result).toContain('AUD');
//         expect(result).toContain('EUR');

//         // Ideal way
//         expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
//     })
// });

// describe('getProduct', () => {
//     it('should return the product with the given id', () => {
//         const result = index.getProduct(1);
//         //expect(result).toEqual({id: 1, price: 10}); //to be checks also for the address of the object. To Equal does not
//         expect(result).toMatchObject({id: 1, price: 10}); // does not need to have all properties the same
//         expect(result).toHaveProperty('id', 1);

//         //toEqual or toBe are making the tests on objects too specific
//     });
// });

// describe('registerUser', () => {
//     it('should throw if username is falsy', () => {
//         // null
//         // undefined
//         // NaN
//         // ''
//         // 0
//         // false
//         const args = [null, undefined, NaN, '', 0, false];
//         args.forEach(a => {
//             expect(() => {index.registerUser(a)}).toThrow();
//         });
//     });

//     it('should return a user object if valid username is passed', () => {
//         const result = index.registerUser('Dorin');
//         expect(result).toMatchObject({username: 'Dorin'})
//         expect(result.id).toBeGreaterThan(0);
//     })
// });

// describe('applyDiscount', () => {
//     it('should apply 10% if the customer has more than 10 points', () => {
//         db.getCustomerSync = function(customerId){
//             console.log('Fake reading customer');
//             return {id: customerId, points: 20};
//         }

//         const order = {customerId: 1, totalPrice: 10};
//         index.applyDiscount(order);
//         expect(order.totalPrice).toBe(9);
//     });
// });