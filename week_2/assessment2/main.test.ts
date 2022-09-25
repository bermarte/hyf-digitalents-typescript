const multiple = require('./main.js');

test('multiples up to 10', () => {
    expect(multiple(10)).toBe(23);
});

test('multiples up to 20', () => {
    expect(multiple(20)).toBe(78);
});

test('multiples up to 100', () =>{
    expect(multiple(100)).toBe(2318);
});
 
test('multiples up to 500', () => {
    expect(multiple(500)).toBe(57918);
});

test('multiples up to 1000', () => {
    expect(multiple(1000)).toBe(233168);
});

test('handles bad input', () => {
    expect(multiple(null)).toBe(0);
    expect(multiple('foobar')).toBe(0);
    expect(multiple([])).toBe(0);
    expect(multiple({})).toBe(0);
});