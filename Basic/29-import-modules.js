/*
Clase 7 en vídeo | 21/08/2024
Console y módulos
https://www.youtube.com/live/PAnxhBE5kIE?si=V0F_NsKO9lmhhatu&t=555
*/

// Importación de módulos

import { add, PI, name, Circle } from "./28-export-modules.js"

import defaultImport from "./28-export-modules.js"

// Funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"