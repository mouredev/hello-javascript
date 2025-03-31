/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let string1 = "Hola"
let string2 = "Mundo"
let phrase = string1 + " " + string2 + "!"
console.log(phrase)

// 2. Muestra la longitud de una cadena de texto

console.log(phrase.length)

// 3. Muestra el primer y último carácter de un string

console.log(phrase[0])
console.log(phrase[phrase.length - 1]) //cuando nosotros no sabemos la longitud del string

// 4. Convierte a mayúsculas y minúsculas un string

console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let phraseMultiline = `Hola!
Esto es 
una cadena de texto
en varias 
líneas`
console.log(phraseMultiline)

// 6. Interpola el valor de una variable en un string

let phraseInterpolated = `Hola, ${string2}!`
console.log(phraseInterpolated)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(phrase.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(phrase.includes("Mundo"))

// 9. Comprueba si dos strings son iguales

console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(string1.length === string2.length)