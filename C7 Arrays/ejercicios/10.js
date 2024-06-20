function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  N = array.findIndex((elemento)=> elemento.length>4)
  return array[N];
}

module.exports = obtenerPrimerStringLargo;
