function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  L= array.length;
  SALIDA= [];
  for(i=0; i<L ;i++ ) {
    SALIDA[i]= i*array[i];
  }

  return SALIDA;
}

module.exports = multiplicarElementosPorIndice;
