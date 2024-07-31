/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let a = "Marcos";

if (a === "Marcos") {
    console.log(a);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let b = "Marcos123";

if (a === "Marcos" && b === "Marcos123") {
    console.log(`El usuario es: ${a}, y la contraseña es: ${b}.`);
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 8;

if (num > 0) {
    console.log(`El número ${num} es positivo.`);
} else if (num === 0) {
    console.log(`El número es ${num}.`);
} else {
    console.log(`El número ${num} es negativo.`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 16;

if (edad < 18) {
    console.log(`Es menor, y le faltan ${18 - edad} años para votar.`);
} else {
    ("Es mayor, puede votar.");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let persona = edad >= 18 ? "Es un adulto" : "Es menor";
console.log(persona);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Mayo";

if (
    mes.toLowerCase() === "diciembre" ||
    mes.toLowerCase() === "enero" ||
    mes.toLowerCase() === "febrero"
) {
    console.log(`Si estamos en ${mes}, es verano.`);
} else if (
    mes.toLowerCase() === "marzo" ||
    mes.toLowerCase() === "abril" ||
    mes.toLowerCase() === "mayo"
) {
    console.log(`Si estamos en ${mes}, es otoño.`);
} else if (
    mes.toLowerCase() === "junio" ||
    mes.toLowerCase() === "julio" ||
    mes.toLowerCase() === "agosto"
) {
    console.log(`Si estamos en ${mes}, es invierno.`);
} else if (
    mes.toLowerCase() === "septiembre" ||
    mes.toLowerCase() === "octubre" ||
    mes.toLowerCase() === "noviembre"
) {
    console.log(`Si estamos en ${mes}, es primavera.`);
} else {
    console.log("El mes ingresado es inválido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (
    mes.toLowerCase() === "noviembre" ||
    mes.toLowerCase() === "abril" ||
    mes.toLowerCase() === "junio" ||
    mes.toLowerCase() === "septiembre"
) {
    console.log(`${mes} tiene 30 días.`);
} else if (mes.toLowerCase() === "febrero") {
    console.log(`${mes} tiene 28 días.`);
} else if (
    mes.toLowerCase() === "enero" ||
    mes.toLowerCase() === "marzo" ||
    mes.toLowerCase() === "mayo" ||
    mes.toLowerCase() === "julio" ||
    mes.toLowerCase() === "agosto" ||
    mes.toLowerCase() === "octubre" ||
    mes.toLowerCase() === "diciembre"
) {
    console.log(`${mes} tiene 31 días.`);
} else {
    ("El mes ingresado es inválido");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo = "Hello";
let idioma;

switch (saludo.toLowerCase()) {
    case "hello":
        idioma = "Inglés";
        break;
    case "hola":
        idioma = "Español";
        break;
    case "alo":
        idioma = "Francés";
        break;
    default:
        idioma = "El idioma no está registrado.";
        break;
}

console.log(idioma);

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let estacion;

switch (mes.toLowerCase()) {
    case "diciembre":
    case "enero":
    case "febrero":
        estacion = "Verano";
        break;
    case "marzo":
    case "abril":
    case "mayo":
        estacion = "Otoño";
        break;
    case "junio":
    case "julio":
    case "agosto":
        estacion = "Invierno";
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        estacion = "Primavera";
        break;
    default:
        estacion = "Mes inválido";
        break;
}

console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let dias;

switch (mes.toLowerCase()) {
    case "noviembre":
    case "abril":
    case "junio":
    case "septiembre":
        dias = 30;
        break;
    case "febrero":
        dias = 28;
        break;
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        dias = 31;
        break;
    default:
        dias = "Mes inválido";
}

console.log(dias);
