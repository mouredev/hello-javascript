/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log('-----------------------------')
let multiplicador = 5
let base = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < base.length; i++) {
    let resultado = multiplicador * base[i]
    console.log(resultado)
}
console.log('-----------------------------')
// 8. 
console.log('-----------------------------')
let texto = 'esta cadena esta invertida'
const textResult = []
for (let i = texto.length - 1; i >= 0; i--) {
    let letraActual = texto[i]
    textResult.push(letraActual)
}

console.log(textResult.join(''))
console.log('-----------------------------')
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log('-----------------------------')
let fibonacciBase = [0, 1]
let lastResult = 0
const fibonacciResult = []
for (let i = 0; i < 9; i++) {
if (fibonacciBase[0] === 0){
    fibonacciResult.push(fibonacciBase[0])
}
lastResult = fibonacciBase[0] + fibonacciBase[1]
fibonacciBase = [fibonacciBase[1], lastResult]
fibonacciResult.push(fibonacciBase[0])
}
console.log('fibonacci propio')
console.log(fibonacciResult)
console.log('-----------------------------')
console.log('-----------------------------')
let a = 0
let b = 1
const resultado = []

for (let i = 0; i < 10; i++) {
    resultado.push(a)
    let siguiente = a + b
    a = b
    b = siguiente
}
console.log('fibonacci chatgpt')
console.log(resultado)
console.log('-----------------------------')

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log('-----------------------------')
const arrayFibonacci = [
    0, 1,  1,  2,  3,
    5, 8, 13, 21, 34
  ]

  const resultArray = []

  for(let i = 0 ; i < arrayFibonacci.length; i++){
    let valorActual = arrayFibonacci[i]
    if (valorActual > 10) {
        resultArray.push(valorActual)
    }
  }

  console.log('resultArray',resultArray)


  console.log('-----------------------------')