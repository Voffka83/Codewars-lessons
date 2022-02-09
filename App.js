/* 1
Реализуйте функцию reverse, которая переворачивает строку.
Решение №1: Переворот строки с помощью встроенных методов
Для этого решения мы будем использовать три встроенных метода: 
String.prototype.split(), Array.prototype.reverse() и Array.prototype.join().
Метод split() принимает на вход строку и преобразует в массив, разбивая ее по разделителю.
Метод reverse() переворачивает элементы массива. Первый элемент становится последним, последний — первым.
Метод join() соединяет все элементы массива в строку.
*/


function reverseString(str) {
    // Шаг 1. Используем метод split(), чтобы получить массив из строки
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Шаг 2. Используем метод reverse(), чтобы перевернуть элементы в полученном массиве
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Шаг 3. Используем метод join(), чтобы соединить элементы массива
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    // Шаг 4. Возвращаем перевернутую строку
    return joinArray; // "olleh"
}
 
reverseString("hello");



/*  можно записать все одной строкой */
const rev = (str) => {
  return str.split('').reverse().join('')
};

console.log(rev('привет'));

// -------------------

/* Решение №2: Переворот строки с помощью цикла For */

// function reverseString(str) {
//     Шаг 1. Создаем строковую переменную, в которую будет помещен результат
//     var newString = "";
 
//     Шаг 2. Создаем цикл FOR
   /* Начальной точкой цикла будет (str.length - 1), что соответствует
       последнему символу в строке, т.е. "o"
       Пока i больше или равна 0, цикл будет продолжать работать,
    уменьшая счетчик на каждой итерации */
//     for (var i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; // or newString = newString + str[i];
//     }
   /* Длина строки 'hello' равна 5, поэтому:
        На каждой итерации: i = str.length - 1 and newString = newString + str[i]
        Первая итерация:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Вторая итерация:    i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Третья итерация:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Четвертая итерация: i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Пятая итерация:     i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    Конец цикла FOR*/
 
    // Шаг 3. Возвращаем перевернутую строку
//     return newString; // "olleh"
// }
 
// reverseString('hello');

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

reverseString('hello');


//-----------------------------------------------------------

/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle. */


const areaOrPerimeter = function(l , w) {
  // Return your answer
  if(l === w){
    return (l*w)
  }else{
    return((l+w)*2)
  }
};

//------------------------------------------------------------

