/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 0; i < 20; i++) {
    console.log(i + 1)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0
for (let i = 0; i < 100; i++) {
    sum += i + 1
}
console.log(sum)

//lo hizo copilot :D

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let i = 1
while (i <= 50) {
    if ( i % 2 == 0) {
        console.log(i)
    }
    i++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names = [ "Lisa", "Rose", "Jennie", "Jisoo" ]

for (let i=0; i < names.length; i++) {
    console.log(names[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let text = "Feliz 8th Aniversario, BLACKPINK!"
let vowels = "aeiouAEIOU"
let countVowels = 0

for (let i=0; i < text.length; i++) {
    if (vowels.includes(text[i].toLowerCase())) {
        countVowels++
    }
}
console.log(countVowels)

while(i < text.length){
    if (vowels.includes(text[i].toLowerCase())) {
        countVowels++
    }
    i++
}
console.log(`El texto: ${text}. Contiene: ${countVowels} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [ 12, 22, 23, 24, 25]
let product = 1
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i]
}
console.log(product)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
i=0
while(i <= 10){
    console.log(`5 x ${i} = ${5 * i}`)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto

let reversedText = ""
for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i]
}
console.log(reversedText)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let Fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2];
}

console.log(Fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numbers2 = [ 1, 2, 3, 11, 12, 13, 5, 22, 23]
let numbersGreaterThan10 = []

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 10) {
        numbersGreaterThan10.push(numbers2[i])
    }
}

console.log(numbersGreaterThan10)

//También lo hizo copilot :D