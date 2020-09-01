const transcript = require('./transcript');

test('transcript', () => {

    // Alfabet (uwaga - wynikowa zmiana kierunku)
    expect(transcript('א|בּ|ב')).toBe('’|b|w')

    expect(transcript('ל')).toBe('l')

    // Ez 38:12 - todo
    // expect(transcript('לִשְׁלֹ֥ל שָׁלָ֖ל וְלָבֹ֣ז בַּ֑ז לְהָשִׁ֨יב יָדְךָ֜ עַל־חֳרָבֹ֣ות נֹושָׁבֹ֗ת וְאֶל־עַם֙ מְאֻסָּ֣ף מִגֹּויִ֔ם עֹשֶׂה֙ מִקְנֶ֣ה וְקִנְיָ֔ן יֹשְׁבֵ֖י עַל־טַבּ֥וּר הָאָֽרֶץ׃')).toBe('???')
})