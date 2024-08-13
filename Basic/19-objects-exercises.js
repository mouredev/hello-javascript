/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// 2. Accede y muestra su valor

console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Age:", car["year"]);

// 3. Agrega una nueva propiedad

car.color = "White";

// 4. Elimina una de las 3 primeras propiedades

delete car.year;

// 5. Agrega una función e invócala

car.horn = function () {
  console.log("Beeeeeep!");
};

car.horn();

// 6. Itera las propiedades del objeto

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 7. Crea un objeto anidado

let person = {
  name: "Marcos",
  age: 33,
  mail: "marcos@mail.com",
  motorcicle: {
    make: "Yamaha",
    year: 2024,
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person.motorcicle.make);
console.log(person.motorcicle.year);

// 9. Comprueba si los dos objetos creados son iguales

console.log(car == person);
console.log(car === person);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car.make == person.motorcicle.make);
console.log(car.make === person.motorcicle.make);
