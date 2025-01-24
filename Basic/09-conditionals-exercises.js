/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Zulangy"
if (myName == "Zulangy"){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let user = "Zulangy"
let password = "1234"
if (user == "Zulangy" && password == "1234"){
    console.log("Usuario y contraseña correctos")
}else{
    console.log("Usuario o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 5
if (number > 0){
    console.log("El número es positivo")
}else if (number < 0){
    console.log("El número es negativo")
}else{
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17
if (age >= 18){
    console.log("Puede votar")
} else {
    console.log(`No puede votar, le faltan ${18 - age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

age = 32
let status = age >= 18 ? "adulto" : "menor"
console.log(status)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let season
let month = "august"

if (month == "january" || month == "february" || month == "march"){
    season = "winter"
}else if (month == "april" || month == "may" || month == "june"){
    season = "spring"
}else if (month == "july" || month == "august" || month == "september"){
    season = "summer"
}else if (month == "october" || month == "november" || month == "december"){
    season = "autumn"
}else{
    season = "Invalid month"
}
console.log(`In ${month}, We are in ${season}`)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let days
month = "february"

if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december"){
    days = 31
}else if (month == "april" || month == "june" || month == "september" || month == "november"){
    days = 30
}else if (month == "february"){
    days = 28
}else{
    days = "Invalid month"
}

console.log(`The month of ${month} have ${days} days`)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "es"

switch (language) {
    case "es":
        console.log("Hola")
    break
    case "en":
        console.log("Hello")
    break
    case "fr":
        console.log("Bonjour")
    break
    default:
        console.log("Idioma no soportado")
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6

season
month = "january"

switch (month) {
    case "january":
    case "february":
    case "march":
        season = "winter"
    break
    case "april":
    case "may":
    case "june":
        season = "spring"
    break
    case "july":
    case "august":
    case "september":
        season = "summer"
    break
    case "october":
    case "november":
    case "december":
        season = "autumn"
    break
    default:
        season = "Invalid month"
}
console.log(`In ${month}, We are in ${season}`)


// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = 31
    break
    case "april":
    case "june":
    case "september":
    case "november":
        days = 30
    break
    case "february":
        days = 28
    break
    default:
        days = "Invalid month"
}
console.log(`The month of ${month} have ${days} days`)
