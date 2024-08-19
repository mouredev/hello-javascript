/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

let a = 10;
let b = 5;

let suma = a + b; // 15

let resta = a - b; // 5

let multiplicacion = a * a; // 100

let division = a / b; // 2

let modulo = a % b; // 0

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion = suma; // 15

let asignacionSuma = (suma += b); // 20

let asignacionResta = (resta -= a); // -5

let asignacionMult = (multiplicacion *= a); // 1000

let asignacionDiv = (division /= b); // 0.4

let asignacionModulo = (modulo %= division); // 0

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

let comparacion1 = 50 > 0;
console.log(comparacion1);

let comparacion2 = -50 < 0;
console.log(comparacion2);

let comparacion3 = 0.1 > 0;
console.log(comparacion3);

let comparacion4 = 1000 == "1000";
console.log(comparacion4);

let comparacion5 = 10 <= 10;
console.log(comparacion5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let comparacion6 = 10 > 15;
console.log(comparacion6);

let comparacion7 = 10 === "10";
console.log(comparacion7);

let comparacion8 = -50 > 50;
console.log(comparacion8);

let comparacion9 = 0 > 0;
console.log(comparacion9);

let comparacion10 = "a" > "b";
console.log(comparacion10);

// 5. Utiliza el operador lógico and

true && true; // true

true && false; // false

false && true; // false

false && false; // false

0 && true; // 0 ya que 0 es igual a false

1 && "Hola"; // Hola ya que el 1 es distinto a 0

// 6. Utiliza el operador lógico or

true || true; // true

true || false; // true

false || true; // true

false || false; // false

// 7. Combina ambos operadores lógicos

true && true && (true || false); // true

(false && false) || false || false; // false

// 8. Añade alguna negación

!false && true && (true || false); // true

!(true && true) || false || false; // false

// 9. Utiliza el operador ternario

edad = 17; // Es menor
edad = 18; // Es mayor
edad = 19; // Es mayor

let esMayor = edad >= 18 ? "Es mayor" : "Es menor";

// 10. Combina operadores aritméticos, de comparáción y lógicas

a * b > suma && a + b !== "15"; // true
