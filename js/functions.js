// Проверяет длину строки
function lineLengthCheck (line, maxLineLength) {
    let lineLength = line.length;
    return (lineLength <= maxLineLength) ? true : false; 
}

// Cтрока короче 20 символов
console.log(lineLengthCheck('проверяемая строка', 20)) // true
// Длина строки ровно 18 символов
console.log(lineLengthCheck('проверяемая строка', 18)) // true
// Строка длиннее 10 символов
console.log(lineLengthCheck('проверяемая строка', 10)) // false


console.log(' '); // Разделение для читемости консоли


// Проверяет является ли строка палиндромом
function isPalindrom (line) {
    line = line.replaceAll(' ', '').toLowerCase();
    
    let reverseLine = '';
    for (let i = line.length; i > 0; i = i - 1) {
            reverseLine += line.at(i-1);
    }

    console.log('Сравниваем "' + line + '" и "' + reverseLine + '"')
    let result = (line === reverseLine) ? true : false;
    console.log(result);
}

isPalindrom('топот'); // true
isPalindrom('ДовОд'); // true
isPalindrom('Кекс');  // false
isPalindrom('Лёша на полке клопа нашёл '); // true


console.log(' '); // Разделение для читемости консоли


// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 
// и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN


function имяФункции (line) {
    line = line.toString();
    let number = '';

    for (let i = 0; i < line.length; i = i + 1) {
        let check = parseInt(line.at(i), 10);
        if (!Number.isNaN(check)) {
            number +=check;
        }
    }

    console.log(parseInt(number));
}

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
имяФункции('');                    // NaN

имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15
