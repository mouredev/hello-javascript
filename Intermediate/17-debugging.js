/*
Clases 72 a 73 - Depuración
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23085
*/

// Depuración

// console.log() (básico)

function sum(a, b) {
    console.log("a:", a)
    console.log("typeof a:", typeof a)
    console.log("b:", b)
    console.log("typeof b:", typeof b)
    return a + b
}

console.log(sum(3, "5"))

// Depurador (profesional)

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}

// console.log(divide(5, 0)) Error