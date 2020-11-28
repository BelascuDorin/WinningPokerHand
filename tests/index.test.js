const index = require('../index');
test('absolute - should return a positive number  if input is positive', () => {
    const result = index.absolute(1);
    expect(result).toBe(1);
});

test('absolute - should return a positive number  if input is negative', () => {
    const result = index.absolute(-1);
    expect(result).toBe(1);
});

test('absolute - should return zero number if input is zero', () => {
    const result = index.absolute(0);
    expect(result).toBe(0);
});