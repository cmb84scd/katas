const unusualSort = require('./solution')

describe('UnusualSort', () => {
    it('sorts strings', () => {
        expect(unusualSort(['a', 'z', 'b'])).toEqual(['a', 'b', 'z'])
    })

    it('sorts integers', () => {
        expect(unusualSort([1, 3, 2])).toEqual([1, 2, 3])
    })

    it('sorts strings of letters and numbers', () => {
        expect(unusualSort(['1', 'z', 'a'])).toEqual(['a', 'z', '1'])
    })

    it('sorts upper and lowercase letters', () => {
        expect(unusualSort(['1', 'Z', 'a'])).toEqual(['Z', 'a', '1'])
    })

    it('sorts letters and integers', () => {
        expect(unusualSort([3, 2, 1, 'a', 'z', 'b'])).toEqual(['a', 'b', 'z', 1, 2, 3])
    })

    it('sorts integers and string numbers', () => {
        expect(unusualSort([3, '2', 1, '1', '3', 2])).toEqual([1, '1', 2, '2', 3, '3'])
    })

    it('sorts very mixed array', () => {
        expect(unusualSort([3, '2', 1, 'a', 'c', 'b'])).toEqual(['a', 'b', 'c', 1, '2', 3])
    })

    it('sorts mixed list with duplicates', () => {
        expect(unusualSort([3, '3', '2', 2, '2', '1', 1, 'a', 'b', 'c'])).toEqual(['a', 'b', 'c', 1, '1', 2, '2', '2', 3, '3'])
    })

    it('sorts mixed list with 2 duplicates', () => {
        expect(unusualSort(['C', '4', 4, 7, 0, 7, 'T', 'N', 'I', 1])).toEqual(['C', 'I', 'N', 'T', 0, 1, 4, '4', 7, 7])
    })
})
