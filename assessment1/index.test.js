const sumOfMultiple = require('./index');

test('multiples up to 10', () => {
    expect(sumOfMultiple(10)).toBe(23);
});

test('multiples up to 20', () => {
    expect(sumOfMultiple(20)).toBe(78);
});

test('multiples up to 100', () =>{
    expect(sumOfMultiple(100)).toBe(2318);
});
 
test('multiples up to 500', () => {
    expect(sumOfMultiple(500)).toBe(57918);
});

test('multiples up to 1000', () => {
    expect(sumOfMultiple(1000)).toBe(233168);
});

test('handles bad input', () => {
    expect(sumOfMultiple(null)).toBe(0);
    expect(sumOfMultiple('foobar')).toBe(0);
    expect(sumOfMultiple([])).toBe(0);
    expect(sumOfMultiple({})).toBe(0);
});