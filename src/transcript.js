const code = {

    // '׆': '?',

    'א': '’', // alef

    'בּ': 'b', // bet (dom)
    'ב': 'w',

    'גּ': 'g', // gimel
    'ג': 'g',

    'דּ': 'd', // dalet
    'ד': 'd',

    'הּ': 'ch', // hej
    'ה': 'ch',

    'וּ': 'w', // waw
    'ו': 'w',

    'זּ': 'z', // zajin
    'ז': 'z',

    'ח': 'h', // chet

    'טּ': 't', // tet
    'ט': 't',

    'יּ': 'j', // jod
    'י': 'j',

    'כּ': 'k',  // kaf
    'כ': 'k',
    'ךּ': 'k',
    'ך': 'k',

    'ל': 'l', // lamed

    'ם': 'm', // mem
    'מּ': 'm',
    'מ': 'm',

    'נּ': 'n', // nun
    'נ': 'n',
    'ן': 'n',

    'סּ': 's', // samech
    'ס': 's',

    'ע': '‘', // ajin

    'פּ': 'p', // pe
    'פ': 'p',
    'ףּ': 'p',
    'ף': 'p',

    'צּ': 'c', // cade
    'צ': 'c',
    'קּ': 'c',
    'ץ': 'c',

    'קּ': 'k', // kof
    'ק': 'k',

    'רּ': 'r', // resz
    'ר': 'r',

    'שּ': 's', // sin/szin ?!
    'ש': 's',

    'שּׂ': 's', // sin
    'שׂ': 's',

    'שּׁ': 'sz', // szin
    'שׁ': 'sz',

    'תּ': 't', // taw
    'ת': 't',

    // 'ׯ': '?',

    // 'װ': '?',
    // 'ױ': '?',
    // 'ײ': '?',
    // '׳': '?',
    // '״': '?'
}

const re = new RegExp(Object.keys(code).join("|"),"gi");

function transcript(str) {
    return str.replace(re, (i, index) => {
        return code[i] || i
    })
}
module.exports = transcript