const index = require('../index');

describe('absolute', () =>{ // Group the tests together 
    it('should return a positive number  if input is positive', () => {
        const result = index.absolute(1);
        expect(result).toBe(1);
    });
    
    it('should return a positive number  if input is negative', () => {
        const result = index.absolute(-1);
        expect(result).toBe(1);
    });
    
    it('should return zero number if input is zero', () => {
        const result = index.absolute(0);
        expect(result).toBe(0);
    });
});
