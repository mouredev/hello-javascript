/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined : variable declarada pero sin valor asignado, variable evolutiva que eventualmente tomará o perderá su valor.
let undefinedValue
console.log(undefinedValue)

// Null: variable con un valor nulo, representa que intencionadamente se establece con valor nulo.
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(myName)
console.log(typeof myName)

console.log(alias)
console.log(typeof alias)

console.log(email)
console.log(typeof email)

console.log(age)
console.log(typeof age)

console.log(height)
console.log(typeof height)

console.log(isTeacher)
console.log(typeof isTeacher)

console.log(isStudent)
console.log(typeof isStudent)

console.log(undefinedValue)
console.log(typeof undefinedValue)

console.log(nullValue)
console.log(typeof nullValue)

console.log(mySymbol)
console.log(typeof mySymbol)

console.log(myBigInt)
console.log(typeof myBigInt)

console.log(myBigInt2)
console.log(typeof myBigInt2)