/* 
let numeroPar = parseInt(prompt('Ingrese un numero')); //Entre parentesis va un mensaje

console.log('El numero ingresado es: ' + numeroPar);


if (numeroPar % 2 == 0) {
    console.log('El numero es par');
} else if (numeroPar % 2 != 0) {
    console.log('El numero es impar');
}
*/

let nota = parseFloat(prompt('Ingrese una nota'));

if (nota >= 1) {
    if (nota <= 5) {
        console.log('Desaprobado');
    } else if (nota <= 7) {
        console.log('Aprobado');
    } else if (nota <= 9) {
        console.log('Muy bien');
    } else if (nota == 10) {
        console.log('Excelente');
    } else {
        console.log('Nota no valida');
    }
} else {
    console.log('Nota no valida');
}
