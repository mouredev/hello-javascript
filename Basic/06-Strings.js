//cadenas de textos
//concatenacion de cadenas
let nombre= "alejandro"
let saludo= "Hola, " + nombre +"!"

console.log(saludo)

//Longitud
console.log(saludo.length)
//Acceso a caracteres individualmente
console.log(saludo[2])//busca la posicion

//Metodos comunes
console.log(saludo.toUpperCase())//Pone todo mayus
console.log(saludo.toLowerCase())//Pone todo minus
console.log(saludo.indexOf("ale"))//Dice el indice
console.log(saludo.includes("Hola"))//Si incluye esta incluido en la cadena se muestra como true o false
console.log(saludo.includes("adios"))
console.log(saludo.slice(0,10))
console.log(saludo.replace("alejandro","luis"))//para remplazar una palabra de un string

// Strings en varias líneas
let message = `hola esto se hace
con una comilla
 que no tengo en mi tecladot`
console.log(message)