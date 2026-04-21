/*
 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en sola línea
//Hola Javascript//

// 2. Escribe un comentario en varias líneas
/*hola
javascript*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

//String
let myName = "María"

//Number
let age = 34
let height = 1.76
//boolean
let isTeacher = false 
let isStudent = true 
//Undefined
let undefinedValue = undefined 
//null 
let nullValue = null 
//Symbol
let mySymbol = Symbol("mySymbol")
//BigInt 
let myBigInt = BigInt(65789779656587974654687789679674658748967897967)
let myBigInt2 = 576878654963796796578967968746789679687879687634n

// 4. Imprime por consola el valor de todas las variables
console.log (myName)
console.log (age)
console.log (height)
console.log (isTeacher)
console.log (isStudent)
console.log (undefinedValue)
console.log (nullValue)
console.log (mySymbol)
console.log (myBigInt)
console.log (myBigInt2)

// 5. Imprime por consola el tipo de todas las variables
console.log (typeof myName)
console.log (typeof age)
console.log (typeof height)
console.log (typeof isTeacher)
console.log (typeof isStudent)
console.log (typeof undefinedValue)
console.log (typeof nullValue)
console.log (typeof mySymbol)
console.log (typeof myBigInt)
console.log (typeof myBigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Ana"
age = 25
height = 1.65
isTeacher = true
isStudent = false
undefinedValue = undefined
nullValue = null
mySymbol = Symbol("newSymbol")
myBigInt = BigInt(12345678901234567890)
myBigInt2 = 999999999999999999999999999n


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 123
age = "veinte y 6"
height = true
isTeacher = null
isStudent = undefined
undefinedValue = false
nullValue = true
mySymbol = 1.25
myBigInt = "12345678901234567890"
myBigInt2 = null

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
//String
const myName2 = "Ale"
//Number
const age2 = 30
const height2 = 1.70
//boolean
const isTeacher2 = true 
const isStudent2 = false 
//Undefined
const undefinedValue2 = undefined 
//null 
const nullValue2 = null 
//Symbol
const mySymbol2 = Symbol("Alex")
//BigInt 
const myBigInt1 = BigInt(65789779656587974654687789679674658748967897967)
const myBigInt3 = 576878654963796796578967968746789679687879687634n

// 9. A continuación, modifica los valores de las constantes
//String
//estas líneas darían error por que no se puede redeclarar una constante 
//myName = "Pepa"
//Number
//age = 49
//height = 1.50
//boolean
//isTeacher = true 
//isStudent = false 
//Undefined
//undefinedValue = undefined 
//null 
//nullValue = null 
//Symbol
//mySymbol = Symbol("nuevoSymbol")
//BigInt 
//myBigInt = BigInt(1234567891000012454897968545657897)
//myBigInt2 = 787897897897897897897897897897897897447141n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
//no puedo redeclarar una variable con el mismo nombre en el mismo archivo
//no puedo redeclarar let o const con el mismo nombre en el mismo ámbito