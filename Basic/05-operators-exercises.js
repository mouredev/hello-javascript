/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

const basePrice = 100
const taxAmount = 15
const discount = 5
const itemsCount = 2

const sum = basePrice + taxAmount       // Suma
const subtraction = basePrice - discount // Resta
const multiplication = basePrice * itemsCount // Multiplicación
const division = basePrice / itemsCount  // División
const remainder = basePrice % 3         // Módulo (Residuo)
const exponent = 2 ** 3                 // Exponencial

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let totalCounter = sum 
totalCounter += 10  // totalCounter = totalCounter + 10
totalCounter -= 5   // totalCounter = totalCounter - 5
totalCounter *= 1.1 // Incremento del 10%
totalCounter /= 2   // División asignada
totalCounter %= 3   // Resto asignado

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

const score = 100
const minRequired = 80

console.log(score > minRequired)       // Mayor que
console.log(minRequired < score)       // Menor que
console.log(score === 100)             // Igualdad estricta
console.log(score >= 100)              // Mayor o igual
console.log(minRequired !== 100)       // Diferente de

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(score < minRequired)       // Menor que
console.log(score === "100")           // Falso (distinto tipo: número vs string)
console.log(minRequired > score)       // Mayor que
console.log(score <= 50)               // Menor o igual
console.log(score !== 100)             // Diferente de (es falso porque sí son iguales)

// 5. Utiliza el operador lógico and

const hasToken = true
const isAdmin = false
const isModerator = true

const canDeletePost = hasToken && isAdmin // false

// 6. Utiliza el operador lógico or

const canEditPost = isAdmin || isModerator // true

// 7. Combina ambos operadores lógicos

const hasAccess = hasToken && (isAdmin || isModerator) // true

// 8. Añade alguna negación

const isGuest = !hasToken // false

// 9. Utiliza el operador ternario

const accessMessage = hasAccess ? "Bienvenido al sistema" : "Acceso denegado"

// 10. Combina operadores aritméticos, de comparáción y lógicas

const stock = 50
const reserved = 10
const isVipCustomer = true
const storeIsOpen = true

// ¿Podemos realizar la venta?
// (Aritmética: stock - reserved) -> (Comparación: > 0) -> (Lógica: AND/OR)
const canProcessSale = storeIsOpen && ((stock - reserved) > 0 || isVipCustomer)

console.log(`¿Procesar venta?: ${canProcessSale}`)