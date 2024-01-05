const calculator = require('./calculator')

test('add, subtract, multiply, divide methods work correctly', () => {
    expect(calculator.add(2, 3)).toBe(5)
})