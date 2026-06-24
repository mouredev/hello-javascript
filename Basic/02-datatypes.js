/*Los Datos primitivos son aquellos en los que se fundamenta nuestra interacción con el lenguaje. Son datos básicos e inmutables. Representan un sólo valor. Es lo que significa dato primitivo. No son objetos.Tampoco tienen funciones o métodos.
Los tipos de datos primitivos son siete:
*Cadena de Texto.(String)
*Números
 */

// Texto(string)
let texto = "Cadena de texto"
// Número (number)
let numero = 5 //entero
let decimal = 1.73 //decimal
// Booleanos (boolean)
let isTeacher = "true"
let isStudent = "false"
// Undefined
let indefinedValue = undefined
console.log(indefinedValue) //undefined: La variable no está aún con un valor definido.
let otroIndefinedValue
console.log(otroIndefinedValue) //undefined
// Null
let variableNula = null // indica ausencia de valor.
// Symbol
let mySymbol = Symbol("esteSimbolo")
console.log(mySymbol)
// Bigint
let numeroGrande = BigInt(546546446544455445454544544546)
let numeroGrande2 = 61646444456456446446464554848684488n //Otra forma de representarlo es poniendo al final una n.
console.log(numeroGrande)
console.log(numeroGrande2)
// Para mostrar los tipos de datos
console.log(typeof numeroGrande)
console.log(typeof mySymbol)
console.log(typeof variableNula)
console.log(typeof indefinedValue)
console.log("nuevo")
