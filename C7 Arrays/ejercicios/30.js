function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  if (numeros.length === 0){
    return null; // Si el array está vacío.
  }
  Repetido= undefined;
  numeros.forEach(element => {
    Cuenta=0;
    for(let i=0 ; i < numeros.length ; i++) {
      
      if(numeros[i]===element){
        Cuenta++;
        if (Cuenta>1) {
          Repetido= element;
        }
      } 
    }
  });



  // for(let i=0;i<numeros.length;i++){
  //   if(numeros[i]===numeros[i+1]){
  //     console.log("Se repite el " + numeros[i]);
  //     return numeros[i];
  //   } 
  // }
  return Repetido;  // Si no hay repetidos.
}

console.log("Repite primero el " + encontrarElementoRepetido([1, 2, 3, 4, 5, 6]));

module.exports = encontrarElementoRepetido;