/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

console.log(`Crea un objeto con 3 propiedades`)
let person = {
    name: `Ciro`,
    age: 18,
    height: 1.70
}
console.log('-----------------------------------------------------')

// 2. Accede y muestra su valor

console.log(`2. Accede y muestra su valor`)
console.log(person)
console.log('-----------------------------------------------------')

// 3. Agrega una nueva propiedad

console.log(`3. Agrega una nueva propiedad`)
person.mom = `Julia`
console.log(person)
console.log('-----------------------------------------------------')

// 4. Elimina una de las 3 primeras propiedades

console.log(`4. Elimina una de las 3 primeras propiedades`)
delete person.height
console.log(person)
console.log('-----------------------------------------------------')

// 5. Agrega una función e invócala

console.log(`5. Agrega una función e invócala`)
person.playVideoGames = () => {
    console.log(`ciro is playing videogames`)
}
console.log(person.playVideoGames())
console.log('-----------------------------------------------------')

// 6. Itera las propiedades del objeto

console.log(`6. Itera las propiedades del objeto`)
for (let key in person) {
    console.log(key + `: ` + person[key])
}
console.log('-----------------------------------------------------')

// 7. Crea un objeto anidado

console.log(`7. Crea un objeto anidado`)
person.hobbie = {
    name: `watch better call saul`,
    seasonsWatched: 3,
    favouriteChapter: `the last one`
}
console.log(person)
console.log('-----------------------------------------------------')

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(`8. Accede y muestra el valor de las propiedades anidadas`)
console.log(person.hobbie)
console.log('-----------------------------------------------------')

// 9. Comprueba si los dos objetos creados son iguales

console.log(`9. Comprueba si los dos objetos creados son iguales`)
const obj1 = {name: 'Ciro', lastName: 'Hesse', address: {street: 'av presidente peron 329'}}
const obj2 = {...obj1, address: {...obj1.address}}
const getFullName = (person) => {
    const {name, lastName} = person
    return name + ' ' + lastName
} 

obj2.name = 'Claus'
obj2.address.street = 'llavallol 1777'
console.log('obj1 es igual a obj2?: ', obj1 == obj2)
console.log('obj1', obj1)
console.log('obj2', obj2)
console.log('getFullName(obj1)', getFullName(obj1))
console.log('getFullName(obj2)', getFullName(obj2))
console.log(person.hobbie === person)
console.log('-----------------------------------------------------')

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(`10. Comprueba si dos propiedades diferentes son iguales`)
console.log(person.age === person.name)
console.log('-----------------------------------------------------')