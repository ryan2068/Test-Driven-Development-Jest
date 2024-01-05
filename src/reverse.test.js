const reverseString = require('./reverse')

test('reverses the given string', () => {
    expect(reverseString('string')).toMatch('gnirts')
})