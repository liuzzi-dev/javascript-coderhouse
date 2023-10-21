// Temperatura de grados Kelvin
let kelvin = 0;
// Temperatura de grados Celsius
let celsius = kelvin - 273;
// Temperatura de grados Fahrenheint
let fahrenheint = Math.floor(celsius * (9 / 5) + 32);
// Temperatura en escala de Newton
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheint} degrees Fahrenheint.`);
console.log(`The temperature is ${newton} degrees Newton.`);