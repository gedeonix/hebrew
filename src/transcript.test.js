const transcript = require('./transcript');

test('transcript', () => {

    expect(transcript('אב')).toBe('’w') // alfabet

    expect(transcript('ל')).toBe('l')

    expect(transcript('כּתב')).toBe('ktw') // pisać
    expect(transcript('והיא')).toBe('wchj’') // matres lectionis

    // TODO
    // expect(transcript('|\u05dc|\u05b4|\u05e9|\u05c1|\u05b0|\u05dc|\u05b9|\u05a5|\u05dc')).toBe('|l|ִ|s|ׁ|ְ|l|ֹ|֥|l')
    expect(transcript('לִשְׁלֹ֥ל')).toBe('l?s??l??l')
    // expect(transcript('לִשְׁלֹ֥ל')).toBe('l')
    // expect(transcript('לִלְלל')).toBe('lִlְll')

    // TODO - samogłoski


    // Ez 38:12 - todo
    // expect(transcript('לִשְׁלֹ֥ל שָׁלָ֖ל וְלָבֹ֣ז בַּ֑ז לְהָשִׁ֨יב יָדְךָ֜ עַל־חֳרָבֹ֣ות נֹושָׁבֹ֗ת וְאֶל־עַם֙ מְאֻסָּ֣ף מִגֹּויִ֔ם עֹשֶׂה֙ מִקְנֶ֣ה וְקִנְיָ֔ן יֹשְׁבֵ֖י עַל־טַבּ֥וּר הָאָֽרֶץ׃')).toBe('???')

})