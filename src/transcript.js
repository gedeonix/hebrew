const numbers = {
  א: 1,
  ב: 2,
  ג: 3,
  ד: 4,
  ה: 5,
  ו: 6,
  ז: 7,
  ח: 8,
  ט: 9,
  י: 10,
  כ: 20,
  ל: 30,
  מ: 40,
  נ: 50,
  ס: 60,
  ע: 70,
  פ: 80,
  צ: 90,
  ק: 100,
  ר: 200,
  ש: 300,
  ת: 400,
  ך: 500,
  ם: 600,
  ן: 700,
  ף: 800,
  ץ: 900
}

const code = {
  // Accent
  /*
      '\u0591': '?',
      '\u0592': '?',
      '\u0593': '?',
      '\u0594': '?',\u05da
      '\u0595': '?',
      '\u0596': '?',
      '\u0597': '?',
      '\u0598': '?',
      '\u0599': '?',
      '\u059a': '?',
      '\u059b': '?',
      '\u059c': '?',

      '\u059d': '?',
      '\u059e': '?',
      '\u059f': '?',
      '\u05a0': '?',
      '\u05a1': '?',
      '\u05a2': '?',
      '\u05a3': '?',
      '\u05a4': '?',
      '\u05a5': '?',
      '\u05a6': '?',
      '\u05a7': '?',
      '\u05a8': '?',
      '\u05a9': '?',
      '\u05aa': '?',
      '\u05ab': '?',
      '\u05ac': '?',
      '\u05ad': '?',
      '\u05ae': '?',
      */

  // '\u05b4\u05d9': 'i', // TODO
  //'\u05af': '?', // masora circle

  // SZEWA
  'ְ': 'ᵊ', // szewa = bardzo krótkie e

  // vowel type A
  'ָ': 'a',  // kamac = długie a
  'ָה': 'a', // kamac + he = = długie a (zwykle koniec słowa, he jest spółgłoską, gdy mapiqq)
  'ַ': 'a',  // patah = któtkie a
  'ַה': 'a', // patah + he = któtkie a (zwykle koniec słowa, he jest spółgłoską, gdy mapiqq)
  'ֲ': 'a',  // chataf-patach = krótkie a (tylko pod gardłowymi, zwykle część kolejnej sylaby)

  // vowel type E
  'ֵי': 'e', // cere + jud = e
  'ֵ': 'e',  // cere = długie e
  'ֶי': 'e', // segol + jud = e
  'ֶ': 'e',  // segol = któtkie e
  'ֱ': 'e',  // chataf-segol = bardzo krótkie e (tylko pod gardłowymi)

  // vowel type I
  'ִי': 'i', // chirk + jud = i (mamy tylko dwa przypadki utraty jud przy: chirik i cere)
  'ִ': 'i',  // chirik = i
  'יִ': 'ji', // jud + chirk = ji (inna kolejność, najpierw jud)

  // vowel type O
  'ֹ': 'o', // cholam = długie o
  'וֹ': 'o', // waw + cholam = długie o
  'ֳ': 'o', // chataf-kamac = krótkie o (tylko pod gardłowymi, zwykle część kolejnej sylaby)
  'ׇ': 'o', // kamac-katan = o (to jest bardzo rzadkie, sylaba zamknięta i nieakcentowana)

  // vowel type U
  'וּ': 'u', // szuruk -> waw + mapik (dagesz) = długie u (czasami używany na początku słowa)
  'ֻ': 'u', // kubuc = krótkie u

  'ֺ': '?',
  'ּ': '?', // dagesz
  'ֽ': '?',
  '־': '־',
  'ֿ': '?',
  '׀': '?',
  'ׁ': '?',
  'ׂ': '?',
  '׃': '.',
  'ׄ': '?',
  'ׅ': '?',
  '׆': '?', // nun hafukha

  // Letter
  א: '', // alef (a, e, i, o, u)
  בּ: 'b', // betּ
  ב: 'w', // wet
  גּ: 'g', // gimel
  ג: 'g',
  דּ: 'd', // dalet
  ד: 'd',
  ה: 'h', // he
  ו: 'w', // waw
  ז: 'z', // zajin
  ח: 'ch', // chet
  ט: 't', // tet
  י: 'j', // jod/jud
  כּ: 'k', // kaf
  כ: 'ch', //chaf
  ך: 'ch',
  'לּ': 'l', // lamed
  ל: 'l', // lamed
  'מּ': 'm', // mem
  מ: 'm', // mem
  ם: 'm',
  נ: 'n', // nun
  ן: 'n',
  ס: 's', // samech
  ע: '', // ajin
  פּ: 'p', // pe
  פ: 'f', // fe
  ף: 'f',
  צ: 'c', // cadi
  ץ: 'c',
  ק: 'k', // kof
  ר: 'r', // resz

  //'שִׁי': 'szi', // TODO
  'שּׁ': 'szsz',
  שׁ: 'sz', // szin
  'שּׂ': 'ss',
  שׂ: 's', // sin
  ש: 's',

  תּ: 't', // taw
  ת: 't'

  // Ligature
  /*
      'װ': '?',
      'ױ': '?',
      'ײ': '?',
      '׳': '?',
      '״': '?'
      */
}

const END = '׃'
const DAGESH = 'ּ'
const SHEVA = 'ְ'

function isFirst(text, i) {
  return i === 0
}

function isFirstConsonan(text, i) {
  if (isFirst(text, i - 1) === false) {
    if (isConsonantLetter(text[i - 1])) {
      return false
    }
    if (isFirst(text, i - 2) === false) {
      return false
    }
  }
  return true
}

/**
 * Consonant Letter
 */
export function isConsonantLetter(letter) {
  return letter >= '\u05d0' && letter <= '\u05ea'
}

export function isMatresLectionisLetter(letter) {
  return 'אהוי'.includes(letter)
}

export function isGutturalLetter(letter) {
  return 'אהחער'.includes(letter)
}

export function isBegedkephatLetter(letter) {
  return 'בגדכפת'.includes(letter) // with gadesh lene
}

export function isSoffitLetter(letter) {
  return 'ךםןףץ'.includes(letter)
}

export function isDageshChazak(letter, prev) {
  return false // TODO
}

function isDoubleLetterDagesh(text, index) {
  let letter = text[index]
  if (letter === 'ו') return false // pomijamy, gdy waw
  if (letter === 'ת') return false // pomijamy, gdy taw
  if (letter === 'פ') return false // pomijamy, gdy pe
  return true
}

/**
 * Vowel Letter
 */
export function isVowelATypeLetter(letter) {
  return 'ֲַָ'.includes(letter)
}

export function isVowelETypeLetter(letter) {
  return 'ֱֵֶ'.includes(letter)
}

export function isVowelITypeLetter(letter) {
  return null // TODO
}

export function isVowelOTypeLetter(letter) {
  return null // TODO
}

export function isVowelUTypeLetter(letter) {
  return null // TODO
}

/**
 * Numeric
 */
export function convertNumericWord(word, debug = false) {
  if (typeof word === 'string') {
    let size = word.length

    // geresh
    if (size === 2) {
      if (word[1] === '׳') {
        let value = numbers[word[0]]
        if (value !== undefined) {
          return value.toString()
        }
      }
    }

    // gerafhayim
    if (size > 2 && word[size - 2] === '״') {
      let sum = 0
      for (let i = 0; i < size - 2; i++) {
        let value = numbers[word[i]]
        if (value === undefined) {
          return word
        }
        sum = sum + value
      }
      let value = numbers[word[size - 1]]
      if (value === undefined) {
        return word
      }
      sum = sum + value
      return sum.toString()
    }
  }
  return word // not convert
}


/**
 * bezdzwięczne spółgłoski
 */
function isVoicelessConsonant(char) {
  if (char === 'א') return false // alef
  if (char === 'ה') return false // he
  if (char === 'ו') return false // waw (gdy traci swoje brzmienie - szuruk oraz cholam)
  if (char === 'י') return false // jud (gdy traci swoje brzmienie - długie chirik i długie cere)
  return false
}

export function transcript(text, debug = false) {
  if (text !== undefined) {
    let words = text.split(' ')

    let result = words
      .map(word => convertNumericWord(word, debug))
      .map(word => transcriptWord(word, debug))

    if (result !== undefined) {
      return result.join(' ')
    }
  }
  return ''
}

export function transcriptWord(str, debug) {
  const re = new RegExp(Object.keys(code).join('|'), 'gi')

  return str.replace(re, (i, index, text) => {
    let value = code[i]

    let meta = {
      first: index === 0,
      last: index === text.length - 1 || text[index + i.length] === END,
      key: i,
      size: i.length,
      value: value,
      dagesz: i.length === 2 && i[1] === DAGESH,
      szewa: i === SHEVA
    }
    if (debug) {
      console.log(i, index, '[' + text + ']', meta, text[index + 1])
    }

    // 1) podwojenie środkowych samogłosek przez dagesz
    if (meta.dagesz === true) {

      if (isDoubleLetterDagesh(text, index)) {

        if (meta.first === false /*&& meta.last === false*/) {
          // TODO sprawdzić, czy wczesniej jest długa lub krótka samogłoska, ale nie szewa
          value = value + value //podwojenie
        }
      }
    }

    // 2) nieme he na końcu
    if (i === 'ה' && meta.first === false && meta.last === true) {
      return ''
    }

    // 3) niema szewa wewnątrz wyrazów (szewa pod pierwszą spółgłoską jest wymawiana)
    if (meta.szewa === true && meta.first === false && meta.last === false) {
      if (isFirstConsonan(text, index) === false) {
        return '' // niema szewa jest w środku wyrazu
      }
    }

    // 4) pomijam nieme - alef i ajin
    if (value === '') return value

    return value || i
  })
}
