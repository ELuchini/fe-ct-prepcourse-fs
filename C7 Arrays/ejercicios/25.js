function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  
  A=0;
  for(let i=0;i<numeros.length;i++){

    if(numeros[i] %2 != 0){
      continue;
    } else {
      A+= 1; // Si no es impar, lo cuento.
    }
    // console.log("Iteración: " + i + "Contéo: " + A);
  }


  return A;

}

contarParesConContinue([1,5,9,8,5,4,3]);

module.exports = contarParesConContinue;
