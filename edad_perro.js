// Edad Humana
let myAge = 7;
// Primeros años
let earlyYears = 2;
earlyYears *= 10.5;
// Se restan los Primeros años a edad Humana
let laterYears = myAge - 2;
laterYears *= 4;
// Suma de earlyYears y laterYears
let myAgeInDogYears = earlyYears + laterYears;
// Se transforma el nombre a minuscula
let myName = 'Axel'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);