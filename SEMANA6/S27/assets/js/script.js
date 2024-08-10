/*
Sintaxis

function nombreDeLaFuncion(parametro1, parametro2) {
//Bloque de codigo de la función, identado
reutrn valorDeRetorno;
}

-Palabra reservada function
-Nombre de la función, siguiendo las mismas reglas de las variables
-Paréntesis de apertura y cierre obligatorios
-Si nuestra función recibe parámetros, los colocamos dentro de los paréntesis, separados por comas si hay más de uno
-Abrir llaves
-Bloque de código a ejecutar de la función
-El retorno de datos si nuestra función lo necesita
-Cerrar llaves
*/

//Función que reciba dos números y regrese la suma de los mismos
//Definición de la función
/*
function sumar(num1, num2) {
    let resultado = num1 + num2;

    return resultado;
}

// Llamar a la función
let respuesta = sumar(-23, 11);
console.log(respuesta);
console.log(sumar(-15, 11));

console.log("");

// Función que reciba dos números y retorne la resta de los mismos
function restar(num1, num2) {
    let resultado = num1 - num2;

    return resultado;

}

//  Llamamos a la función
let resultadoResta = restar(120, 150);
console.log(resultadoResta);

console.log("");

// Funciones para multiplicar y dividir

function multiplicar(num1, num2) {
    let resultado = num1 * num2;

    return resultado;
    //No se ejecuta despues del retorno
    console.log("Después del retorno");
}

let respuestaMulti = multiplicar(8, 18);
console.log(respuestaMulti);

console.log("");

//División

function dividir(num1, num2) {
    if (num2 !=0) {

        let resultado = num1 / num2;

    return resultado;

    }
    return "ERROR: DIVIDIENDO CERO";
}

let resultadoDiv = dividir(15, 0);
console.log(resultadoDiv);

console.log("");

*/

//Arrow function significa función de flecha
//Sumar
let sumar = (num1, num2) => num1 + num2;

//Llamar a la función
let respuesta = sumar(-43, 11);
console.log(respuesta);

console.log("");

// Restar
let restar = (num1, num2) => {
    let resultado = num1 - num2;

    return resultado;

};

//Llamamos a la función
let respuestaResta = restar(30, 15);
console.log(respuestaResta);

console.log("");

//Funciones para multiplicar y dividir en arrow function

let multiplicar = (num1, num2) => num1 * num2;

let respuestaMulti = multiplicar(5, 11);
console.log(respuestaMulti);

console.log("");


let dividir= (num1, num2) => num1/num2;

let resultadoDiv = dividir(121, 11);
console.log(resultadoDiv);

console.log("");




