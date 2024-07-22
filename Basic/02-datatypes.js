/*Los datos primitivos son los datos basicos
del lenguaje y inmutables, representan 
un solo valor, no son objetos y tampoco
tienen  funciones o metodos,
utilizaremos 7 tipos de datos*/

/*Datos tipo cadena de texto (string) */
let nombre = "Alejandro"
let alias = 'Ale'
let email = "ialejandrog15@gmail.com"

/*Dato primitivo tipo numeros (number) */
let edad = 22 //numero entero
let altura = 1.74 //numero decimal

/*Datos primitivo tipo booleano (boolean*/
let EsEstudiante = true
let EsProfesor = false

/*Dato primitivo Undefined */
/*Es para una varabiable o propiedad que aun 
no tiene valor */
let undefinedValue
console.log(undefinedValue)

/*Dato primitivo null se usan para
declarar variables con valores null*/

let nullValue= null

/*Estos ultimos datos se añadieron
en la actualizacion de ecmascript 6 */

/*Dato primitivo tipo Symbol, representan
valores unicos, sirven para crear
identificadores de propiedades para objetos */
let misimbolo= Symbol("mysymbol")

/*Dato primitivo tipo Bigint
para numeros muy grandes */

let myBigint= BigInt(30131023132131231233123)
let myBigint2= 9000000000000000000000000000n

/*como poder mostrar los tipos de datos */

console.log(typeof nombre)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof altura)
console.log(typeof edad)

console.log(typeof EsEstudiante)
console.log(typeof EsProfesor)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof misimbolo)

console.log(typeof myBigint)
console.log(typeof myBigint2)