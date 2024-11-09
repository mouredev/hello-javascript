/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nameUser = "Yoandy"
if (nameUser === "Yoandy") {
  console.log(`Welcome back ${nameUser}`)
} else {
  console.log("Incorrect name, please try again.")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let userName = "yoandy.doble"
let password = "Clave1234*"

if (userName === "yoandy.doble" && password == "Clave1234*") {
  console.log("Welcome: " + userName)
} else {
  console.log("Incorrect user or password")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numberTest = 0
if (numberTest > 0) {
  console.log(`The number ${numberTest} is positive`)
} else if (numberTest < 0) {
  console.log(`The number ${numberTest} is negative`)
} else {
  console.log(`The number ${numberTest} is cero`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let voteAge = 34
// Way 1 if else
if (voteAge >= 18) {
  console.log(`This person can vote`)
} else {
  console.log(`This person can't vote until ${18 - voteAge} years`)
}

// Way 2 ternary
let vote =
  voteAge >= 18
    ? console.log(`This person can vote`)
    : console.log(`This person can't vote until ${18 - voteAge} years`)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let agePerson = 34
let adultChild
adultChild = agePerson >= 18 ? (adultChild = "Adult") : (adultChild = "Child")

console.log(adultChild)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = "September"

if (month === "March" || month === "April" || month === "May") {
  console.log(`Month: ${month}, Season: Spring.`)
} else if (month === "June" || month === "July" || month === "August") {
  console.log(`Month: ${month}, Season: Summer.`)
} else if (
  month === "September" ||
  month === "October" ||
  month === "November"
) {
  console.log(`Month: ${month}, Season:  Autumn.`)
} else {
  /*
  month === "December" ||
  month === "January" ||
  month === "February"
  */
  console.log(`Month: ${month}, Season:  Winter.`)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month === "February") {
  console.log("Month " + month + "has 28 days")
} else if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "August" ||
  month === "October" ||
  month === "December"
) {
  console.log("Month " + month + "has 31 days")
} else {
  /*
  month === "April" ||
  month === "June" ||
  month === "September" ||
  month === "November"
  */
  console.log("Month " + month + " has 30 days")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let languageSystem = "UK"
//Respuesta esperada: incorrect language

switch (languageSystem) {
  case "Spanish":
    console.log("Un saludo en idioma ".concat("Español."))
    break
  case "English":
    console.log("Hello in ".concat(languageSystem, " language."))
    break
  case "French":
    console.log("Salutations en français.")
    break
  case "German":
    console.log("Grüße auf Deutsch.")
    break
  case "Italian":
    console.log("Saluti in italiano.")
    break
  default:
    console.log("Incorrect language.")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (month) {
  case "January":
    console.log(`Month: ${month}, Season:  Winter.`)
    break
  case "February":
    console.log(`Month: ${month}, Season:  Winter.`)
    break
  case "March":
    console.log(`Month: ${month}, Season: Spring.`)
    break
  case "April":
    console.log(`Month: ${month}, Season: Spring.`)
    break
  case "May":
    console.log(`Month: ${month}, Season: Spring.`)
    break
  case "June":
    console.log(`Month: ${month}, Season: Summer.`)
    break
  case "July":
    console.log(`Month: ${month}, Season: Summer.`)
    break
  case "August":
    console.log(`Month: ${month}, Season: Summer.`)
    break
  case "September":
    console.log(`Month: ${month}, Season:  Autumn.`)
    break
  case "October":
    console.log(`Month: ${month}, Season:  Autumn.`)
    break
  case "November":
    console.log(`Month: ${month}, Season:  Autumn.`)
    break
  case "December":
    console.log(`Month: ${month}, Season:  Winter.`)
    break
  default:
    console.log("This is not a month")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month) {
  case "January":
    console.log("Month " + month + "has 31 days")
    break
  case "February":
    console.log("Month " + month + "has 28 days")
    break
  case "March":
    console.log("Month " + month + "has 31 days")
    break
  case "April":
    console.log("Month " + month + " has 30 days")
    break
  case "May":
    console.log("Month " + month + "has 31 days")
    break
  case "June":
    console.log("Month " + month + " has 30 days")
    break
  case "July":
    console.log("Month " + month + "has 31 days")
    break
  case "August":
    console.log("Month " + month + "has 31 days")
    break
  case "September":
    console.log("Month " + month + " has 30 days")
    break
  case "October":
    console.log("Month " + month + "has 31 days")
    break
  case "November":
    console.log("Month " + month + " has 30 days")
    break
  case "December":
    console.log("Month " + month + "has 31 days")
    break
  default:
    console.log("This is not a month")
}
