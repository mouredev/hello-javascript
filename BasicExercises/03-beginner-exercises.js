/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea

//Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/* Esto es un comentario
con múltiples líneas de texto
Author: codebydoble
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

/* Datatypes
1- String
2- Number
3- Boolean
4- Undefined
5- Null
6- Bigint
7- Symbol
*/
let alias = "codebydoble"
let price = 67365.02
let isEngineer = true
let count
let sumTotal = null
let bigNumber = BigInt(123365n)
let otroBig = 12365n
let symbolYDH = Symbol("codebydoble")

// 4. Imprime por consola el valor de todas las variables

console.log(alias)
console.log(price)
console.log(isEngineer)
console.log(count)
console.log(sumTotal)
console.log(bigNumber)
console.log(otroBig)
console.log(symbolYDH)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof alias)
console.log(typeof price)
console.log(typeof isEngineer)
console.log(typeof count)
console.log(typeof sumTotal)
console.log(typeof bigNumber)
console.log(typeof otroBig)
console.log(typeof symbolYDH)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

alias = "dobledj"
price = 55
isEngineer = false
bigNumber = BigInt(999999999999999999999)
otroBig = 888888888888888888888888n
symbolYDH = Symbol("9999999999999999999999")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

alias = true
price = "6700000"
isEngineer = 3333333333333333333333333333333n
bigNumber = "Hello Javascript"
otroBig = [1, 2, 3]
count = 33333
sumTotal = `This is a template literal`
symbolYDH = 12345

console.log(typeof alias)
console.log(typeof price)
console.log(typeof isEngineer)
console.log(typeof count)
console.log(typeof sumTotal)
console.log(typeof bigNumber)
console.log(typeof otroBig)
console.log(typeof symbolYDH)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nameUser = "Yoandy"
const factorBTC = 6800000
const isWorking = true
const personalAccount = null
const cantPotatoes = undefined
const hugeValue = 123654789n
const symbolCBD = Symbol("YDH")

// 9. A continuación, modifica los valores de las constantes

/* The const can't be modified */

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
