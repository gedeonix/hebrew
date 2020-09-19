const FIRST_YEAR = 3760;

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
};

function year(year) {
  return FIRST_YEAR + year;
}

function yearToText(year) {
  let value = FIRST_YEAR + year - 5000;
  let result = value.toString().split("");
  console.log(result);

  for (let key in numbers) {
    // console.log(numbers[key])
  }

  return "todo";
}

module.exports = {
  year,
  yearToText,
};
