const { year, yearToText } = require('./gemetria')

describe('gemetria', () => {

    test('year', () => {
        expect(year(0)).toBe(3760)
        expect(year(2016)).toBe(5776)
        expect(year(2020)).toBe(5780)
    })

    test('yearToText', () => {

        expect(yearToText(2016)).toBe('todo')
    })
})
