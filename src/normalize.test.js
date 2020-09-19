const normalize = require('./normalize')

describe('normalize', () => {

    test('presentation forms', () => {

        expect(normalize('ﬠ')).toBe('ע')
        expect(normalize('ﬡ')).toBe('א')
        expect(normalize('ﬢ')).toBe('ד')
        expect(normalize('ﬣ')).toBe('ה')
        expect(normalize('ﬤ')).toBe('כ')
        expect(normalize('ﬥ')).toBe('ל')
        expect(normalize('ﬦ')).toBe('ם')
        expect(normalize('ﬧ')).toBe('ר')
        expect(normalize('ﬨ')).toBe('ת')

        // expect(normalize('﬩')).toBe('?')

        expect(normalize('שׁ')).toBe('שׁ')
        expect(normalize('שׂ')).toBe('שׂ')
        expect(normalize('שּׁ')).toBe('שּׁ')
        expect(normalize('שּׂ')).toBe('שּׂ')

        expect(normalize('אַ')).toBe('אַ')
        expect(normalize('אָ')).toBe('אָ')
        // expect(normalize('אּ')).toBe('אּ') //???

        expect(normalize('בּ')).toBe('בּ')
        expect(normalize('גּ')).toBe('גּ')
        expect(normalize('דּ')).toBe('דּ')
        expect(normalize('הּ')).toBe('הּ')
        expect(normalize('וּ')).toBe('וּ')
        expect(normalize('זּ')).toBe('זּ')
        expect(normalize('טּ')).toBe('טּ')
        expect(normalize('יּ')).toBe('יּ')
        expect(normalize('ךּ')).toBe('ךּ')
        expect(normalize('כּ')).toBe('כּ')
        expect(normalize('לּ')).toBe('לּ')
        expect(normalize('מּ')).toBe('מּ')
        expect(normalize('נּ')).toBe('נּ')
        expect(normalize('סּ')).toBe('סּ')
        expect(normalize('ףּ')).toBe('ףּ')
        expect(normalize('פּ')).toBe('פּ')
        expect(normalize('צּ')).toBe('צּ')
        expect(normalize('קּ')).toBe('קּ')
        expect(normalize('רּ')).toBe('רּ')
        expect(normalize('שּ')).toBe('שּ')
        expect(normalize('תּ')).toBe('תּ')

        expect(normalize('וֹ')).toBe('וׄ')
        expect(normalize('בֿ')).toBe('בֿ')
        expect(normalize('כֿ')).toBe('כֿ')
        expect(normalize('פֿ')).toBe('פֿ')

        // expect(normalize('ﭏ')).toBe('?')
    })
})
