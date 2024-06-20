function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0){
    return null; // Si el array está vacío.
  }

  A= numeros[0]-1;
  // Lalala= numeros.forEach(element => {
  //   if(!(A+1===element)){
  //     let i= A + 1;
  //     console.log("Es el " + i);
  //     return i; // Cuando encuentra un faltante.
  //   } else {
  //     console.log(A+1);
  //     A++;
  //   }
  // });

  // return Lalala;
  // return "nullooooooo"; // Si no hay faltantes.

  for(let i=0;i<numeros.length;i++){
    if(!(A+1===numeros[i])){
      console.log("Falta el " + (A + 1));
      return A + 1;// Cuando encuentra un faltante.
    } else {
      A++;
    }
  }
  return null;  // Si no hay faltantes.
}

console.log("FaltaRRRRRRRRRRRRRRRRRRRia el " + encontrarNumeroFaltante([5,6,7,8,9,10,12]));

module.exports = encontrarNumeroFaltante;