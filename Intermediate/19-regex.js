/*
Clase 7 - Debug, Regex y Testing (12/03/2025)
Vídeo: https://www.twitch.tv/videos/2420494093?t=00h21m55s
*/

// Expresiones regulares

// - Sintaxis

const regex = /abc/
const regex2 = RegExp("abc")
const text = "Hola abc JavaScript"

// test: verifica coincidencia con true o false

console.log(regex.test(text))
console.log(regex2.test(text))

const text2 = "Mi edad es 37"
const regex3 = /\d/g
const regex4 = /[4-6]/
console.log(regex3.test(text2))
console.log(regex4.test(text2))

// replace: reemplaza el texto que coincide con el patrón

const regex5 = /JavaScript/
console.log("Hola JavaScript".replace(regex5, "JS"))
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(text3.replace(regex3, "[número]"))

// exec: retorna detalles de la coincidencia

console.log(regex3.exec(text3))

while ((match = regex3.exec(text3)) !== null) {
    console.log(match)
}