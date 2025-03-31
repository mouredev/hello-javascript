/*
Clase 7 - Debug, Regex y Testing (12/03/2025)
Vídeo: https://www.twitch.tv/videos/2420494093?t=00h21m55s
*/

// Testing

// - Tipos de testing

// Pruebas unitarias

function sum(a, b) {
    return a + b
}

module.exports = sum

console.log(sum(3, 5) === 8)

// Pruebas de integración

// Pruebas end-to-end (E2E)