// alert() sirve para mostar un mensaje en el navegador

// alert('MENSAJE INICIAL');

function mostrarMensaje() {
   // alert ('Hola desde el navegador'); 

   // Mostramos los números del 1 al 10
   for ( let i = 1; i <= 10; i++ ) {
    // console.log(i);
    alert (i);
   }

}

//EJEMPLO 2
let texto = "";

// Obtenemos el conteo como texto HTML
for (let i = 1; i <= 10; i++) {
    texto += `${i}<br />`;
}

// Asignamos al elemento
document.getElementById("demo").innerHTML
= texto;

// EJEMPLO 3 
// Limpiamos la variable texto
texto = "";
const autos = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// Acceder a los elementos de la lista mediante un bucle
// creamos números
for (let i = 0; i < autos.length; i++) {
    texto += `${autos[i]}<br />`;
}

// Asignamos al elemento
document.getElementById('autos').innerHTML = texto;

//EJEMPLO 4
// Limpiamos la variable texto
texto = "";

// Recorrer una lista por elemento
// algo que ya existe 
for ( let auto of autos ) {
    texto += `${auto}<br />`;
}

// Asignamos al elemento
document.getElementById('autos2').innerHTML = texto;