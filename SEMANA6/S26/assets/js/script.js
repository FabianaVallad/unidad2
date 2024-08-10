// EJERCICIO 1
// Números del 0 al 5
// Declaramos nuestra variable (Esta irá cambiando con el bucle)
/*let number = 0;

// Bucle while
while (number <= 5) {
    // Bloque de código a repetir
    console.log(number);
    //Incremetar la variable number
    number++;
}

console.log("");

// Con for 
for (let number = 0; number <= 5; number++) {
console.log(number);
} */





//RETO1
// Números pares del 1 al 100
/*
let number = 1;

while (number <= 100) {
    if (number %2 === 0) {
        console.log(number);
    }
    number++;
}

console.log(""); */


//RETO2
// Números impares del 1 al 12
/*let number = 1;

while (number <= 12) {
    if ( number %2 != 0) {  //Distinto a 0
        console.log(number);
    }
    number++;
}

console.log(""); 
*/

// Recorrer arreglos con el nucle while
const paises = ['Perú', 'Uruguay','Chile'];
let i = 0;
while (paises-length > i) {
    console.log(paises[i]);
    i = i++;
}

/*
//Bucle while
let number = 7;

while (number <= 5) {
console.log(number);
number++;
}
*/

/*
// Do while
let number = 12;

do {console.log(number);
number++;
} while (number <= 5)
 */

// alert
// alert('Hola');

//prompt()
/*
let nombre = prompt('Ingresa tu nombre');
console.log(nombre);

let edad = prompt ('Ingresa tu edad');
console.log(edad);
*/

//REGEX
/*
const patron = /hola/;
// const patron = /hola[0-9]mundo/;
// const patron = /hola[0-9]+mundo/;
// const patron = /^hola$/;
// const patron = /^[0-9]+$/;
let dato;
do {
  dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato));
console.log('Coincidencia');
*/