/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma 
let resta
let multiplicacion
let division
let modulo
let exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
            //NO ENTENDÍ, LA VERDAD XD
let sumaAsignacion = suma += 2
let restaAsignacion = resta -= 2
let multiplicacionAsignacion = multiplicacion *= 2
let divisionAsignacion = division /= 2
let moduloAsignacion = modulo %= 2
let exponenteAsignacion = exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 2)
console.log(2 < 5)
console.log(25 >= 12)
console.log(5 <= 22)
console.log(5 == 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(12 > 22)
console.log(88 < 59)
console.log(254 >= 942)
console.log(52 <= 22)
console.log(5 == 1)

// 5. Utiliza el operador lógico and

console.log(5 > 2 && 2 < 5)

// 6. Utiliza el operador lógico or

console.log(5 == 5 || 25 >= 12)

// 7. Combina ambos operadores lógicos

console.log(5 > 2 && 2 < 5 || 25 >= 12)

// 8. Añade alguna negación

console.log(5 != 5)

// 9. Utiliza el operador ternario

let ternario = 5 > 2 ? "Es mayor" : "Es menor"
console.log(ternario)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(5 + 2 > 2 && 2 < 5 || 25 >= 12)