//INVERTIR UN ARREGLO
const reverse = (array) => {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i]);
    }
    return reversed;
  };
  
  module.exports = reverse;

  //CONTAR VOCALES
  const countVowels = (str) => {  
    let counter = 0;
    const vowels = "aeiou";
    
    for (let char of str) {
      if (vowels.includes(char)) {
        counter++;
      }
    }
    return counter;
  
  };
  
  module.exports = countVowels;

//FUNCIÓN PAR/IMPAR
const evenOrOdd = (n) => {
    if (n % 2 === 0) {
      return 0;
     } else {
         return 1;
     }
 
 };
 
 module.exports = evenOrOdd;

 //NÚMERO MAYOR QUE OTRO 
 const max = (A, B, C) => {
    if (A >= B && A >= C) {
           return A;
       } else if (B >= A && B >= C) {
           return B;
       } else {
           return C;
       }
   
   };
   
   module.exports = max;

//DETERMINAR SI UN NÚMERO ES PRIMO
const isPrime = (n) => {
    if (n <= 1 ) {
      return false;
    }
      for (let i = 2; i < n; i++) {
          if (n % i === 0) {
              return false; 
          }
      }
      return true; 
  };
  
  module.exports = isPrime;

//PUEDES CONDUCIR Y VOTAR?
const canDriveAndVote = (edad) => {
 
    return edad >= 19
  
  };
  
  module.exports = canDriveAndVote;

//DETERMINAR SI DOS NÚMEROS SON PARES
const areOdd = (n, m) => {
    if (n % 2 === 0, m % 2 === 0) {
          return true; 
      } else {
          return false;
      }
  
  
  };
  
  module.exports = areOdd;


