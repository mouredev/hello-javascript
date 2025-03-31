/*
Clase 7 - Debug, Regex y Testing (12/03/2025)
Vídeo: https://www.twitch.tv/videos/2420494093?t=00h21m55s
*/

const sum = require('./21-testing')

test("Suma de 3 + 5 tiene que ser 8", () => {
    expect(sum(3, 5)).toBe(8)
})

test("Suma de 3 + 3 tiene que ser 6", () => {
    expect(sum(3, 4)).toBe(6)
})