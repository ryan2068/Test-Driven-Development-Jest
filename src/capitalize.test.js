const capitalizeString = require('./capitalize')


test('capitalizes first letter of a given string', () => {
    expect(capitalizeString('ryan')).toMatch('Ryan')
})