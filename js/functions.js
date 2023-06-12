// Проверяет длину строки
function lineLengthCheck (line, maxLineLength) {
  const lineLength = line.length;
  return lineLength <= maxLineLength;
}

lineLengthCheck('проверяемая строка', 20); // true
lineLengthCheck('проверяемая строка', 18); // true
lineLengthCheck('проверяемая строка', 10); // false

// Проверяет является ли строка палиндромом
function isPalindrom (line) {
  const normalizeLine = line.replaceAll(' ', '').toLowerCase();
  let reverseLine = '';
  for (let i = normalizeLine.length - 1; i >= 0; i--) {
    reverseLine += normalizeLine.at(i);
  }
  return normalizeLine === reverseLine;
}

isPalindrom('топот'); // true
isPalindrom('ДовОд'); // true
isPalindrom('Кекс'); // false
isPalindrom('Лёша на полке клопа нашёл '); // true

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN

function makeOnlyNumber (line) {
  const stringLine = line.toString();
  let number = '';
  for (let i = 0; i < stringLine.length; i++) {
    const check = parseInt(stringLine.at(i), 10);
    if (!Number.isNaN(check)) {
      number += check;
    }
  }
  return parseInt(number, 10);
}

makeOnlyNumber('2023 год'); // 2023
makeOnlyNumber('ECMAScript 2022'); // 2022
makeOnlyNumber('1 кефир, 0.5 батона'); // 105
makeOnlyNumber('агент 007'); // 7
makeOnlyNumber('а я томат'); // NaN
makeOnlyNumber(''); // NaN
makeOnlyNumber(2023); // 2023
makeOnlyNumber(-1); // 1
makeOnlyNumber(1.5); // 15
