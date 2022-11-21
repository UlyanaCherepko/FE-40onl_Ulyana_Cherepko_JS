// 1
const formalgGreeting = 'Hello, ';
const informalgGreeting = 'Hi, ';
const exclamation = '!';
const favouriteUser = 'Mark'

const fullPhrase = function (inputName) {
    if (inputName === favouriteUser){
    return `${informalgGreeting}${inputName}${exclamation}`;
    }
    else {
        return `${formalgGreeting}${inputName}${exclamation}`;
    }
};
console.log(fullPhrase('Mark'));


// 2 не очень понятно само задание, ведь для вычисления гипотенузы нужны две стороны, а нам даны три, поэтому для формулы я взяла одну сторону - 3 и вторую сторону - 4
const firstSide = 3;
const secondSide = 4;

const thirdSide = function () {
    return Math.sqrt(firstSide ** 2 + secondSide ** 2);
}
console.log (thirdSide());


// 3
const compareFunction = function (a, b) {
    if (a > b) {
        return b;
    }
    if (a < b) {
        return a;
    }
};
console.log (compareFunction(-1, 4));


// 4
const isEven = function (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log (isEven(10));


// 5
const wordToChange = 'Hello';
const cutCharacter = function () {
    const word = wordToChange.slice (1, wordToChange.length-1);
    console.log(word);
}
cutCharacter();


// 6
const word = 'Hello';
const capitalized = function () {
    if (word.length % 2 === 0) {
            const firsCapital = word[0].toUpperCase();
            const restLetters = word.slice(1, word.length -1).toLowerCase();
            const finalLetter = word.substring(word.length - 1).toUpperCase();
            return firsCapital + restLetters + finalLetter;
        }
        else {
            const firsCapital = word[0].toUpperCase();
            const restLetters = word.slice(1).toLowerCase();
            return firsCapital + restLetters;
        }
};
console.log(capitalized());


// 7
const checkLetterCase = function (letter) {
    if (letter === letter.toUpperCase()) {
        return 'Оууу май, большая буква!';
    }
    else {
        return 'Нет уж, маленькие буквы - скучно!'
    }
};
console.log(checkLetterCase('f'));

// 8
const concatenate = function (firstWord, secondWord) {
    return `${firstWord} ${secondWord}`;
};
console.log(concatenate('Hello', 'World'));


// 9
const checkStringLength = function (string, number) {
    if (string.length > number) {
        return 'String is too long!';
    }
    else {
        return string;
    }
}
console.log(checkStringLength('Hi', 2));
