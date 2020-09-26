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
  '\u05b2': 'a', //patah
  '\u05b3': '?', //qamats

  // jud
  '\u05b4\u05d9': 'i', // chirk + jud = i
  '\u05b5\u05d9': 'e', // cere + jud = e

  '\u05d9\u05b4': 'ji', // jud + chirk = ji

  // waw
  '\u05d5\u05b9': 'o', // waw + cholam = o

  '\u05b6\u05d4': 'e', // segol + he = któtkie e
  '\u05b4': 'i', // chirik = i
  '\u05b5': 'e', // cere = długie e
  '\u05b6': 'e', // segol = któtkie e
  '\u05b7': 'a', // patah
  '\u05b8': 'a', // kamac
  '\u05b9': 'o', // cholam
  '\u05ba': '?',
  '\u05bb': '?',
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

  תּ: 't', // taw
  ת: 't',

  // Ligature
  /*
      'װ': '?',
      'ױ': '?',
      'ײ': '?',
      '׳': '?',
      '״': '?'
      */
}

const SPACE = ' '
const DAGESH = '\u05bc'

export function transcript(str) {
  const re = new RegExp(Object.keys(code).join('|'), 'gi')

  return str.replace(re, (i, index, text) => {
    let value = code[i]
    let meta = {
      first: index === 0 || text[index-1] === SPACE,
      last: index === text.length - 1 || text[index+1] === SPACE,
      key: i,
      size: i.length,
      value: value,
      dagesz: i.length === 2 && i[1] === DAGESH
    }
    console.log(i, index, '['+text+']', meta)

    // 1) podwojenie przez dagesz
    if(meta.dagesz === true && meta.first === false) {
      value = value + value //podwojenie
    }

    // 2) he na końcu
    if(meta.first === false && meta.last === true && i === 'ה') {
      return ''
    }

    if (value === '') return value
    return value || i
  })
}
