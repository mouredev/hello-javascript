/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

console.log('1. Crea una función que reciba dos números y devuelva su suma ')
function numSum(a, b) {
    return (a + b)
}
let resultado = numSum(9, 11)
console.log('resultado 1: ', resultado)
console.log('-----------------------------------------------------')

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.log('2. Crea una función que reciba un array de números y devuelva el mayor de ellos ')
function findMaxNumber(numberList){
let maxNumber = -Infinity
    for(const currentNumber of numberList) {
        if(currentNumber > maxNumber){
            maxNumber = currentNumber
        }
    }
    return maxNumber
}
const resultado1 = findMaxNumber([1, 4, 5, 3, 6])
const resultado2 = findMaxNumber([100, 2, 48, 20, 69, -30, 85, 38])
console.log('resultado 2-A: ', resultado1)
console.log('resultado 2-B: ', resultado2)
console.log('-----------------------------------------------------')

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

console.log('3. Crea una función que reciba un string y devuelva el número de vocales que contiene')
const frase1 = 'esta es una frase'
const frase2 = 'estamos listos para irnos a tenis'
function findVowels(phrase){
    const vowels = 'aeiouAEIOU'
    let amountOfVowels = 0 
    for(const character of phrase) {
        if(vowels.includes(character)){
            amountOfVowels = amountOfVowels + 1
        }
    }
    return amountOfVowels
}
const resultadoVocales1 = findVowels(frase1)
const resultadoVocales2 = findVowels(frase2)
console.log('resultado 3-A: ', resultadoVocales1)
console.log('resultado 3-B: ', resultadoVocales2)
console.log('-----------------------------------------------------')    

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

console.log('4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas')
const stringsArray = ['hola ciro', 'hola claus', 'esto es un array con strings']
const convertToUpperCase = (arrayOfStrings) => {
    const resultArray = []
    if(Array.isArray(arrayOfStrings) && arrayOfStrings.every(s => typeof s === 'string')){
        for(const currentString of arrayOfStrings) {
            resultArray.push(currentString.toUpperCase())
        }
    }
    return resultArray
} 
const resultadoConvert = convertToUpperCase(stringsArray)
console.log('resultado 4: ', resultadoConvert)
console.log('-----------------------------------------------------')    

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

console.log('5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario')
console.log('-----------------------------------------------------')    

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

console.log('6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos')
const commonArray1 = [2, 4, 6, 7, 9]
const commonArray2 = [1, 4, 5, 7, 8]
const getCommonItemps = (firstArrayToCompare, secondArrayToCompare) => {
    const resultArray = []
    for(const currentValue of firstArrayToCompare) {
        if(secondArrayToCompare.includes(currentValue)){
            resultArray.push(currentValue)
        }
    }
    return resultArray
}
console.log('resultado 6 ', getCommonItemps(commonArray1, commonArray2))
console.log('-----------------------------------------------------')

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

console.log('7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares')
const numbersArray = [3, 4, 8, 12, 26, 15, 43]
const sumAllEvenNumbers = (arrayOfNumbers) => {
    return arrayOfNumbers.reduce((valorTotal, valorActual) => { 
        if(valorActual % 2 === 0){
            return valorTotal + valorActual 
        }
        return valorTotal
    }, 0)
}

console.log('resultado 7: ',sumAllEvenNumbers(numbersArray))
console.log('-----------------------------------------------------')

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

console.log('8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado')
const elevarAlCuadrado = (arrayOfNumbers) => {
    const resultArray = []
    for (const currentNumber of arrayOfNumbers) {
        resultArray.push(currentNumber * currentNumber)
    }
    return(resultArray)
}

// otra forma de hacerlo:
// const getSquare = n => n * n 
// const elevarAlCuadrado = (arrayOfNumbers) => arrayOfNumbers.map(getSquare)

console.log('resultado 8 ', elevarAlCuadrado([3, 6, 2, 8]))
console.log('-----------------------------------------------------')

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

console.log('9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso')
const stringNew = ('hola como te va soy ciro')
const invertText = (cadenaDeTexto) => {
    const arrayDelString = cadenaDeTexto.split(' ')
    const arrayDelStringReversed = arrayDelString.reverse()
    return arrayDelStringReversed.join(' ')
}
const resultado9 = invertText(stringNew)
console.log('resultado 9 ',resultado9)
console.log('-----------------------------------------------------')

// 10. Crea una función que calcule el factorial de un número dado

const calculeFactorial = (numbersCalcule) => {
    const factorial  
}