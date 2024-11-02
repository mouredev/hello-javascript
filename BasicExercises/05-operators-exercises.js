/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

let sumInventary = 36 + 258.1
let restProduct = 9536 - 215
let productService = 50 * 345
let opDivide = 100 / 2
let sqrtProduct = 45 ** 2
let moduleProduct = 300 % 3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let mySum,
  myRest,
  myMultp,
  myDiv,
  myModule,
  myDupl = 400

mySum *= 10
myRest -= 2
myMultp *= 65
myDiv /= 20
myModule %= 6
myDupl **= 8

let productIncrease = sqrtProduct++
console.log(sqrtProduct)
let productDecrease = sqrtProduct--
console.log(sqrtProduct)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let accountJose = 608
let accountBarby = 608
console.log(restProduct > sumInventary)
console.log(opDivide < 3000)
console.log(sqrtProduct >= 365)
console.log(905 <= 905)
console.log(accountJose == accountBarby)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let username = "yoandy.doble"
const phi = 3.14
console.log(username != "yoandy.doble")
console.log(username === "yoandy")
console.log(123 > 123654)
console.log(phi >= 9870)
console.log(true === 0)

// 5. Utiliza el operador lógico and

console.log(username != "codebydoble" && 3658 > 10)

// 6. Utiliza el operador lógico or

console.log(username != "codebydoble" || 3658 > 10)

// 7. Combina ambos operadores lógicos

console.log((100 > 10 && 7 < "codebydoble") || 3658 > 10)

// 8. Añade alguna negación

let accountStatus = true
console.log(accountStatus)

if (!accountStatus) {
}

// 9. Utiliza el operador ternario

let isAdult = true
let yoandy = isAdult ? console.log("He's adult") : console.log("He's a child")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(9 + 12 > 10 && 50 * 15 >= 3)
