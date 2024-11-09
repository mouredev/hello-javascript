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

let {name} = kid

console.log(name)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación
