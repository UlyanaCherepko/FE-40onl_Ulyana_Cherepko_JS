//// 1 задание с сэй хэллоу, только марк любимый пользователь и для него отдельное приветствие

// const formalgGreeting = 'Hello, ';
// const informalgGreeting = 'Hi, ';
// const exclamation = '!';
// const favouriteUser = 'Mark'

// const fullPhrase = function (inputName) {
//     if (inputName === favouriteUser){
//     return `${informalgGreeting}${inputName}${exclamation}`;
//     }
//     else {
//         return `${formalgGreeting}${inputName}${exclamation}`;
//     }
// };
// console.log(fullPhrase('Mark'));

// ПРАВИЛЬНОЕ
const sayHello = function (name) {
    const SPECIAL_NAME = 'mark'; // название капсом так как мы объявляем глобалььное константное значение и с ним будет сравниваться наш name
    const isMark = name.toLowerCase() === SPECIAL_NAME;
    const greeting = isMark ? 'Hi' : 'Hello'; // теронарный оператор ?-if :-else чтобы не писать длинное условие и дублировать код
    return `${greeting}, ${name}!`
}
console.log(sayHello ('monty'));




//// 2 вычисление гипотенузы, одна сторона - 3 и втора сторона - 4

const thirdSide = function (n, m) {
    return Math.sqrt(n ** 2 + m ** 2);
}
console.log (thirdSide(3, 4)); 




//// 3 функция которая возвращает наименьшее число

// const compareFunction = function (a, b) {
//     if (a > b) {
//         return b;
//     }
//     if (a < b) {
//         return a;
//     }
// };
// console.log (compareFunction(-1, 4));

// ПРАВИЛЬНО
const min = function (a, b) {
    if (a === b) {
        return 'Numbers are equal'
    }
    return Math.min(a, b); // математическая формула которая вычленяет наименьшее число
};
console.log (min(1, 2));



//// 4 функция пишет четное число чи не 

// const isEven = function (number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };
// console.log (isEven(10));

// ПРАВИЛЬНО
const isEven = function(number) { // тут прописано булевое значение которое уде подразумевает true/false так что нам не нужно прописывать доп условия
    return number % 2 === 0
}
console.log(isEven(4))




//// 5 функция удаляет первый и последние символы строки

// const wordToChange = 'Hello';
// const cutCharacter = function () {
//     const word = wordToChange.slice (1, -1);
//     console.log(word);
// }
// cutCharacter();

// ПРАВИЛЬНО
const deleteCharacters = function (word) { // более лаконичная правильная запись
    return word.slice (1, -1);
}
console.log(deleteCharacters('Hello'));




//// 6 первая буква должна быть заглавной а если букв четное число то и последгяя заглавная тоже

// const word = 'Hello';
// const capitalized = function () {
//     if (word.length % 2 === 0) {
//             const firsCapital = word[0].toUpperCase();
//             const restLetters = word.slice(1, word.length -1).toLowerCase();
//             const finalLetter = word.substring(word.length - 1).toUpperCase();
//             return firsCapital + restLetters + finalLetter;
//         }
//         else {
//             const firsCapital = word[0].toUpperCase();
//             const restLetters = word.slice(1).toLowerCase();
//             return firsCapital + restLetters;
//         }
// };
// console.log(capitalized());

//ПРАВИЛЬНО
const wordWritting = function (word) {
    const firstCapitalLetter = word[0].toUpperCase(); // тут выносим общие условия для двух случаев, чтобы не прописывать одно и то же два раза
    const isCharsAmountEven = word.length % 2 === 0;
    if (isCharsAmountEven) {
        const restWord = word.slice(1, -1).toLowerCase();
        const lastCapitalLetter = word[word.length - 1].toUpperCase();
        return `${firstCapitalLetter}${restWord}${lastCapitalLetter}`;
    }
    return `${firstCapitalLetter}${word.slice(1).toLowerCase()}`
}
console.log(wordWritting('QWERT'));
 



//// 7 если большая буква одна строчка выдается если маленькая то другая

// const checkLetterCase = function (letter) {
//     if (letter === letter.toUpperCase()) {
//         return 'Оууу май, большая буква!';
//     }
//     else {
//         return 'Нет уж, маленькие буквы - скучно!'
//     }
// };
// console.log(checkLetterCase('f'));

//ПРАВИЛЬНО
const isBigLetter = function (character) {
    if (typeof  character !== 'string' || character.length > 1 || character.length === 0) { // прописываем условие на случай если введут число, два симыола или ничего
        return;
    }
    return character === character.toUpperCase() ? 'Оууу май, большая буква!' : 'Нет уж, маленькие буквы - скучно!'
}
console.log(isBigLetter('F'));




//// 8  склеивает две строки друг с другом с пробелом 

const concatenate = function (firstWord, secondWord) {
    return `${firstWord} ${secondWord}`;
};
console.log(concatenate('Hello', 'World'));




//// 9 если длина строки больше чем число то String is too long!

// const checkStringLength = function (string, number) {
//     if (string.length > number) {
//         return 'String is too long!';
//     }
//     else {
//         return string;
//     }
// };
// console.log(checkStringLength('Hi', 2));

//ПРАВИЛЬНО
const checkStringLength = function (string, number) {
    return string.length > number ? 'String is too long!' : string;
};
console.log(checkStringLength('Hii', 2));
