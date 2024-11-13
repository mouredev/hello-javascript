/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let cities = ["Havana", "Milan", "Ontario", "Brasilia", "Washington"]

let [nameHv, nameMilan] = cities

console.log(nameHv)
console.log(nameMilan)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let dognames = ["Kazam", "Toky", "Perl", "Dog", "Koky"]

let [kazamValue, tokyValue, perlValue, dogValue, kokyValue, noDogname = "Chris"] = dognames
console.log(noDogname)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let kid = {name: "Nathan", age: 2, parents: ["Endry", "Arlety"]}

let {name, age} = kid

console.log(name, age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let jaguar = {name: "Kitty", color: "yellow", age: 3}

let {name: nombre, age: edad} = jaguar

console.log("Jaguar\nName: ", nombre + "\nEdad: ", edad)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let laptopDell = {
    model: "Dell",
    brand: "Inspiron 24",
    ram: 16,
    cpu: "Core i7",
    motherboard: {arq: 64, type: "all", price: 400},
    performance: {rate: 1.5, sumary: "100%"}
}

let {
    motherboard: {arq},
    performance: {rate: ratio}
} = laptopDell

console.log("Desestructuración de objetos anidados: \nArq ->", arq + "\nRating ->", ratio)

// 6. Usa propagación para combinar dos arrays en uno nuevo

/* Array no 1 */
let passengers = ["Barbarita", "Liudmila", "Alpidio", "Nina", "Arlet", "Miguel", "Moure", "Karla", "Austin", "Jennifer"]
/* Array no 2 */
let passengersRow2 = ["David", "Dayma", "Daviel", "Lulu", "Noemi", "Elianys", "Ernesto", "Jhon", "Brais"]

let flyPlane = [...passengers, ...passengersRow2]
console.log(flyPlane)

// 7. Usa propagación para crear una copia de un array
let newPassengers = [...passengers]
console.log(newPassengers)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let mesa = {size: 350, color: "brown"}
let cupHouse = {type: "simple", isEmpty: false, area: 589.36}

let myHouse = {...mesa, ...cupHouse}
console.log(myHouse)

// 9. Usa propagación para crear una copia de un objeto

let anotherTable = {...myHouse}
console.log("Object copied ->", anotherTable)

// 10. Combina desestructuración y propagación

let numberCount = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"]
let [one, , , , five, six = 6] = numberCount
let doorHouse = {title: "Door YDH"}

let personYDH = {name: "Yoandy", year: one, ...doorHouse}
console.log(personYDH)
