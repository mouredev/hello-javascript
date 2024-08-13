/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let array = [1, 2, 3, 4, 5];

let [myValue0, myValue1, myValue2, myValue3, myValue4] = array;

console.log(myValue0);
console.log(myValue1);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [
  myValue5 = 0,
  myValue6 = 1,
  myValue7 = 2,
  myValue8 = 3,
  myValue9 = 4,
  myValue10 = 5,
] = array;

console.log(myValue10);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
  name: "Marcos",
  age: 33,
  mail: "marcos@mail.com",
  motorcicle: {
    make: "Yamaha",
    year: 2024,
  },
};

let { name, age, mail, motorcicle } = person;

console.log(name);
console.log(motorcicle);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { name: name2, mail: mail2 } = person;

console.log(name2);
console.log(mail2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {
  motorcicle: { make },
  motorcicle: { year },
} = person;

console.log(make);
console.log(year);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let newArray = [...array, 6, 7, 8];

// 7. Usa propagación para crear una copia de un array

let copyArray = [...newArray];

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person2 = {
  secondName: "Pedro",
  lastName: "Lombardo",
};

let newPerson = { ...person, ...person2 };

// 9. Usa propagación para crear una copia de un objeto

let newPerson2 = { ...newPerson };

// 10. Combina desestructuración y propagación
