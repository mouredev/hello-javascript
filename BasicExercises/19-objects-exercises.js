/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let paintcuba = {name: "Cuban Portrait", date: "09-11-2024", author: "Yoandy Doble Herrera"}

// 2. Accede y muestra su valor

console.log(paintcuba.author)
// Expetcted: Yoandy Doble Herrera

// 3. Agrega una nueva propiedad

paintcuba.description = "A beautiful paint of Cuba"
console.log("Add new property: description \n", paintcuba)

// 4. Elimina una de las 3 primeras propiedades

delete paintcuba.date
console.log("Delete date property \n", paintcuba)

// 5. Agrega una función e invócala

paintcuba.sell = (offer) => {
    if (offer > 1000) {
        console.log("Bid accepted for: ", paintcuba.name)
    } else {
        console.log("Bid not accepted for: ", paintcuba.name, " price to low")
    }
}

console.log(paintcuba)

paintcuba.sell(1258)

// 6. Itera las propiedades del objeto

for (let keysValue in paintcuba) {
    console.log(keysValue + ":" + paintcuba[keysValue])
}

// 7. Crea un objeto anidado

paintcuba.history = {title: "A brief history of Cub", age: 500}
console.log("Objeto anidados \n", paintcuba)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log("Property -age- in history objet: ", paintcuba.history.age)

// 9. Comprueba si los dos objetos creados son iguales
let objetNo1 = {name: "Yoandy"}
let objetNo2 = {name: "Barbarita", lastname: "Herrera"}

if (objetNo1 === objetNo2) {
    console.log("Objetos iguales")
} else {
    console.log("No son iguales los objetos")
}

// 10. Comprueba si dos propiedades diferentes son iguales

if (objetNo1.name === objetNo2.lastname) {
    console.log("Propiedades iguales por tipo y valor")
} else {
    console.log("Propiedades no iguales por tipo y valor")
}
