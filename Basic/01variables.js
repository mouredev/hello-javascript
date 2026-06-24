// var
/* No se recomienda usarla ya que da errores en el código , como por ejemplo ser llamado antes de ser
definido y dar como resultado undefined, lo que indica que la variable, aunque no definida, existe antes de ser declarada y eso es un error. A partir de EICMA 6 se convino que la palabra reservada let  sería la sustituta, ya que esta no crea los problemas de código, y es asignada exclusivamente a los bloques de código. un ejemplo de esto es el siguiente: La variable siendo asignada antes de ser definida da undefined*/
console.log(helloWorld)
var helloWorld = "Hola JavaScript"
console.log(helloWorld)

// let
/* Esta es la palabra reservada que viene a sustituir en determinada forma a la palabra reservada var, aunque esta se sigue utilizando en muy específicas ocasiones. Para let no existe el error de estar existente antes de ser declarada como se ve en el siguiente ejemplo, en el cual en la primera impresión en la consola,no se puede acceder a la variable antes de ser inicializada, lo cual es correcto.*/
// console.log(helloworlds)
let helloworlds = "Hola JavaScript"
console.log(helloworlds)

// const
/*La variable const de fine a las constantes, las cuales al adquirir un primer valor, no pueden cambiar este, excepto en los arrays, en los cuales al pasar el valor como referencia, se puede cambiar el contenido. */
const constante = "Este valor no cambia"
console.log(constante)
// constante='Intento de cambio' Da error.
console.log(constante)
console.log('nuevo')
console.log("nuevo")
console.log("nuevo");

