/* 1
Реализуйте функцию reverse, которая переворачивает строку.
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


//-----------------------------------------------------------