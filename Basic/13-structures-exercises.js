/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["gato", "perro", "capibara", "pájaro", "panda"]
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift("tigre") //al principio
animals.push("serpiente") //al final
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1) //después de la 2da posición, elimina 1 elemento
console.log(animals)

// 4. Crea un set que almacene cinco libros

let books = new Set(["Gardenia", "La chica de los colores", "Belleza verdadera", "Ambrosía", "Rosas para Emilia"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add("El jardín de las mariposas", "Belleza verdadera")
console.log(books)
//Solo se añade uno porque el otro ya existe

// 6. Elimina uno concreto a tu elección

books.delete("Ambrosía")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

months.get(5) ? console.log(months.get(5)) : console.log("No existe el mes número 5")

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set("summer", ["july", "august", "september"])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["uno", "dos", "tres", "cuatro", "cinco"]
console.log(myArray)

let mySet = new Set(myArray)
console.log(mySet)

let myMap = new Map([["myRealArray", mySet]])
console.log(myMap)