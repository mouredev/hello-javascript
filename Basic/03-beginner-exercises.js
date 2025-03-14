/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Este es un comentario de una linea, hola!!

// 2. Escribe un comentario en varias líneas

/*
    Hola, este es un comentario
        de
            varias
                lineas
                    :)
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let idol = "Lisa"
let age = 25
let isArtist = true
let nothing = undefined
let empty = null
let symbol = Symbol("mySymbol")
let bigInt = BigInt(1234567890123456789012345678901234567890)

// 4. Imprime por consola el valor de todas las variables

console.log(idol)
console.log(age)
console.log(isArtist)
console.log(nothing)
console.log(empty)
console.log(symbol)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof idol)
console.log(typeof age)
console.log(typeof isArtist)
console.log(typeof nothing)
console.log(typeof empty)
console.log(typeof symbol)
console.log(typeof bigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

idol = "Moonbyul"
age = 30
isArtist = true
nothing = undefined
empty = null
symbol = Symbol("mySymbol")
bigInt = 1234567890123456789012345678901234567890n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

idol = 26
age = "Cha Eunwoo"
isArtist = undefined
nothing = null
empty = false
symbol = Symbol("mySymbol") //meh
bigInt = 1234567890123456789012345678901234567890n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const idol2 = "Jennie"
const ageOfIdol = 24
const isArtistNow = true
const nothing2 = undefined
const empty2 = null
const symbol2 = Symbol("mySymbol")
const bigInt2 = BigInt(1234567890123456789012345678901234567890)

// 9. A continuación, modifica los valores de las constantes

    //No se puede modificar el valor de una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

    //No hay lineas que produzcan errores al ejecutarse, podrían haber si se intentara modificar el valor de una constante... cosa que no hice :D
