//operadores

//Operadores aritmeticos
console.log(5+10) //suma

//suma con variables
let a = 5
let b = 10
console.log(a+b)

console.log(a-b)//resta
console.log(a*b)//multiplicacion
console.log(a/b)//División

console.log(a%b)//Modulo
console.log(a**b)//Exponencial

//Incremento
a++
console.log(a)
//Decremento
b--
console.log(b)

//Operadores de asignacion
let myvariable = 2 //simbolo igual
console.log(myvariable)

myvariable +=2 //Se suma con el mismo valor
console.log(myvariable)
//Variaciones:
myvariable -=2
myvariable *=2
myvariable /=2
myvariable %=2
myvariable **=2

//Operadores de comparacion
//Estos resultados siempre son booleanos
console.log(a>b)
console.log(a<b) 
console.log(a>=b) 
console.log(a<=b) 
console.log(a==b)
console.log(a==5)//a se incremento y ahora vale 6
console.log(a==a)
console.log(a===6)//Igualdad por identidad, compara tipo y valor
console.log(a==="6")//cadena de texto no es igual
console.log(a!=6)
console.log(a!=="6")

//cosas peculiares
console.log(0==false)
console.log(1==false)
console.log(1==true)
console.log(0=="")
console.log(0=="hola")
console.log(undefined==null)
console.log(undefined===null)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//Operadores ternarios
const estalloviendo = false


estalloviendo ? console.log("Esta lloviendo ahora mismo"): console.log("no esta lloviendo")
