function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sum = 0;
  for (const number of arrayOfNums) {
    sum += number;
  }

  return sum;
}

module.exports = agregarNumeros;
