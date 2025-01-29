const toJadenCase = require('./jaden_case')

describe('toJadenCase', () => {
    it('should return a string with each word capitalized', () => {
        expect('How can mirrors be real if our eyes aren\'t real'.toJadenCase())
            .toBe('How Can Mirrors Be Real If Our Eyes Aren\'t Real')
    })
})
