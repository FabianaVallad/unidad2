/*
Bucle for

Es un bucle finito porque se le indica la cantidad de veces que se debe repetir

SINTAXIS

for ( inicio; fin; pasos)  {
     // Bloque de cóigo a repetir
      }

      for: Palabra reservada
      inicio: valor en el cual inicia el bucle
      fin: valor en el cual termina el bucle, lo indico como mayor menor
      pasos: intervalo entre valor y valor

      ESTAS TRES EXPRESIONES INDICAN QUE A i SE LE AUMENTA 1
      i++ 
      i += 1
      i = i + 1

      Iterador: Una variable que va recorriendo un objeto iterable 
      */


      //EJERCICIO 1
      //imprimir la palabra 'Hola' 10 veces
      for ( let i = 0; i < 10; i++ ) {
        console.log('Hola');
      }

      //EJERCICIO 2
      //imprimir la palabra 'JavaScript' 25 veces
      for ( let i = 0; i < 25; i++ ) {
        console.log('JavaScript');
      }

      //EJERCICIO 3
      // Mostrar los números del 0 al 9
      for (let i = 0; i < 10; i++) {
        console.log(i);
        // En la última linea se actualiza el valor de i
      }

      console.log('');

      //EJERCICIO 4
      //Mostrar los números del 1 al 10
      for ( let i = 1; i < 11; i++ ) {
        console.log(i);
      }
      
      console.log('');

      //EJERCICIO 5
      // Mostrar los números desde el4 hasta el 23 (tomando el 23), de 3 en 3
      for ( let i = 4; i < 24; i+= 3 ) {
        console.log(i);
      }

      console.log('');

      //EJERCICIO 6
      // Mostrar los números del 10 al 100, de 10 en 10
      // 10 20 30 40 50 60 70 80 90 100

      for ( let i = 10; i < 101; i+= 10 ) {
        console.log(i);
      }
      console.log('');

      //EJERCICIO 7
      // Mostrar los números dedl 9 al 0
      for (let i = 9; i >=0; i--) {
        console.log(i);
      }
      