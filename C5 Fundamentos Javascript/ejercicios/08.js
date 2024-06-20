function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  
  

  // if (numero % 1 === 0){
  //   return true
  // } else {
  //   console.log(numero % 1);
  //   return false
  // }
  return Number.isInteger(numero);
}


// console.log(esNumeroEntero("4w"));


module.exports = esNumeroEntero;