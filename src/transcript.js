const code = {
  // Accent
  /*
      '֑': '?',
      '֒': '?',
      '֓': '?',
      '֔': '?',
      '֕': '?',
      '֖': '?',
      '֗': '?',
      '֘': '?',
      '֙': '?',
      '֚': '?',
      '֛': '?',
      '֜': '?',
      '֝': '?',
      '֞': '?',
      '֟': '?',
      '֠': '?',
      '֡': '?',
      '֢': '?',
      '֣': '?',
      '֤': '?',
      '֥': '?',
      '֦': '?',
      '֧': '?',
      '֨': '?',
      '֩': '?',
      '֪': '?',
      '֫': '?',
      '֬': '?',
      '֭': '?',
      '֮': '?',
      */

  // '\u05b4\u05d9': 'i', // TODO
  //'\u05af': '?', // masora circle

  '\u05b0': 'ᵊ', //szewa = bardzo krótkie e
  '\u05b1': 'e', //chataf-segol = bardzo krótkie e
  '\u05b2': 'a', //patach
  '\u05b3': '?', //kamac

  // jud
  '\u05b4\u05d9': 'i', // chirk + jud = i (mamy tylko dwa przypadki utraty jud przy: chirik i cere)
  '\u05b5\u05d9': 'e', // cere + jud = e
  '\u05d9\u05b4': 'ji', // jud + chirk = ji (inna kolejność, najpierw jud)

  // waw
  '\u05d5\u05bc': 'u', // waw + dagesz (mapik) = u
  '\u05d5\u05b9': 'o', // waw + cholam = o

  // he
  '\u05b6\u05d4': 'e', // segol + he = któtkie e

  '\u05b4': 'i', // chirik = i
  '\u05b5': 'e', // cere = długie egetB
  '\u05b6': 'e', // segol = któtkie e
  '\u05b7': 'a', // patah
  '\u05b8': 'a', // kamac
  '\u05b9': 'o', // cholam
  '\u05ba': '?',
  '\u05bb': 'u', // kubuc
  '\u05bc': '?', // dagesz
  '\u05bd': '?',
  '\u05be': '?',
  '\u05bf': '?',
  '\u05c0': '?',
  '\u05c1': '?',
  '\u05c2': '?',
  '\u05c3': '.',
  '\u05c4': '?',
  '\u05c5': '?',
  '\u05c6': '?', // nun hafukha
  '\u05c7': '?',

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
const SPACE = ' '
const DAGESH = 'ּ'
const SHEVA = 'ְ'

function isConsonant(text, index) {
  let value = text[index]
  return value >= '\u05d0' && value <= '\u05ea'
}

function isFirst(text, i) {
  return i === 0 || text[i - 1] === SPACE
}

function isFirstConsonan(text, i) {
  if (isFirst(text, i - 1) === false) {
    if (isConsonant(text, i - 1)) {
      return false
    }
    if (isFirst(text, i - 2) === false) {
      return false
    }
  }
  return true
}

function isDoubleLetterDagesh(text, index) {
  let letter = text[index]
  if(letter === 'ו') return false // pomijamy, gdy waw
  if(letter === 'ת') return false // pomijamy, gdy taw
  return true
}

export function transcript(str) {
  const re = new RegExp(Object.keys(code).join('|'), 'gi')

  return str.replace(re, (i, index, text) => {
    let value = code[i]
    let meta = {
      first: index === 0 || text[index - 1] === SPACE,
      last: index === text.length - 1 || (text[index + i.length] === SPACE || text[index + i.length] === END),
      key: i,
      size: i.length,
      value: value,
      dagesz: i.length === 2 && i[1] === DAGESH,
      szewa: i === SHEVA
    }
    // console.log(i, index, '['+text+']', meta, text[index+1])

    // 1) podwojenie środkowych samogłosek przez dagesz
    if(meta.dagesz === true) {

      if(isDoubleLetterDagesh(text, index)) {

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
