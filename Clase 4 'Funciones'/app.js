/*function saludar() {
  let nombre = prompt('Ingrese su nombre');
  alert('Hola ' + nombre);
}

saludar();*/

/*function sumar(num1, num2) {
  alert(num1 + num2);
}

let numero1 = parseFloat(prompt("Numero 1"));
let numero2 = parseFloat(prompt("Numero 2"));

sumar(numero1, numero2);*/


function calcularImpuestos(valorBase, impPais, impGanancias, impBP) {
  let impuestos = valorBase * impPais + valorBase * impGanancias + valorBase * impBP;
  alert('La suma de sus impuestos es: ' + impuestos);
  return valorBase + impuestos;
}

do {
  let valor = parseFloat(prompt('Imgrese el valor a calcular'));

  let costoTotal = calcularImpuestos(valor, 0.30, 0.45, 0.35);

  alert('El costro total es: ' + costoTotal);

  let continuar = prompt('Quieres continuar?');
  continuar = continuar.toLowerCase;

  if (continuar == 'si') {
    continuar1 = true;
  }

} while (continuar1);

