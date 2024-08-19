/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "loro", "tortuga", "caballo"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift("conejo");
animales.push("vaca");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

let mySet = new Set([
    "El Principito",
    "Harry Potter",
    "Game of Thrones",
    "Rayuela",
    "La Vuelta al Mundo en 80 Días",
]);
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido

mySet.add("El Señor de los Anillos");
console.log(mySet);

mySet.add("Rayuela");
console.log(mySet);

// 6. Elimina uno concreto a tu elección

mySet.delete("Harry Potter");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
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
    [12, "Diciembre"],
]);
console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5));
console.log(myMap.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("verano", ["Diciembre", "Enero", "Febrero"]);
console.log(myMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let newArray = [1, 2, 3, 4, 5];

let newSet = new Set(newArray);

let newMap = new Map();
newMap.set("Almacenamiento", newSet);

console.log(newMap);
