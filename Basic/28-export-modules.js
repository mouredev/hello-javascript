/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// Exportación de módulos

// Funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "MoureDev"

// Clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}

// Exportación por defecto

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }
