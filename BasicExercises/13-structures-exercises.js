/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

let zooAnimal = ["Lion", "Tiger", "Cocrodile", "Penguin", "Jirafe"]
console.log("Array animals: " + zooAnimal)

// 2. Añade dos más. Uno al principio y otro al final

/* Firs element */
console.log("Previous lenght: " + zooAnimal.length)

let lenghtAnimal = zooAnimal.unshift("Dog")

console.log("Element at the start of Array animals: " + zooAnimal)

console.log("New lenght: " + zooAnimal.length)

/* Final element */
zooAnimal.push("Rabbit")
console.log("Element at the end of Array animals: " + zooAnimal)
console.log("Element at the end of Array animals: " + zooAnimal.length)

// 3. Elimina el que se encuentra en tercera posición

let removedAnimals = []
removedAnimals.push(zooAnimal.splice(2, 1))
console.log("Animals removed: " + removedAnimals)

// 4. Crea un set que almacene cinco libros

let bookSet = new Set([
  "Harry Potter and the Philosophal Stone",
  "The Last Legion",
  "Gladiator",
  "The Prince of Persia",
  "El Principito",
])

console.log(bookSet)
console.log(typeof bookSet)

// 5. Añade dos más. Uno de ellos repetido
bookSet.add("Hercules")
console.log(bookSet)

bookSet.add("El Principito")
console.log(bookSet)

// 6. Elimina uno concreto a tu elección

bookSet.delete("Hercules")
console.log(bookSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let monthsMap = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
])
console.log(monthsMap)
console.log(monthsMap.get(1))

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (monthsMap.has(5)) {
  console.log(monthsMap.get(5))
} else {
  console.log("The number 5 month is not present")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let summerMonths = ["June", "July", "August"]
monthsMap.set("Summer", summerMonths)

console.log(monthsMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let playersFCB = [
  "Lewandosky",
  "Raphina",
  "Lamine",
  "Pedri",
  "Marc",
  "Gavi",
  "Kounde",
  "Pau",
  "Iñigo",
  "Alejandro",
  "Iñaky",
]
console.log(`Playes FC Barcelona -Array-: ${playersFCB}.`)

let playersSet = new Set(playersFCB)

console.log(playersSet)

let playersMap = new Map([["Players", playersSet]])

console.log(playersMap)
