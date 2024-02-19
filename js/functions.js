/*Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину
и возвращает true, если строка меньше или равна указанной длине,
и false, если строка длиннее.*/

const lengthOfString = (string, maxLength) => string.length <= maxLength;

lengthOfString('Тестовая строка', 14);


//Функция для проверки, является ли строка палиндромом.

const isPalindrom = (string) => {
  const normalString = (string.replaceAll(' ', '')).toLowerCase();
  let testString = '';

  for (let i = normalString.length - 1; i >= 0; i--) {
    testString += normalString[i];
  }

  return testString === normalString;
};

isPalindrom('доВод');
