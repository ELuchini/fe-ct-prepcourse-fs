function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sum = 0;
  let numberOfElements = resultadosTest.length;

  if (numberOfElements === 0) {
    return 0; // Handle empty array case
  }

  for (const number of resultadosTest) {
    sum += number;
  }

  return sum / numberOfElements;
}

module.exports = promedioResultadosTest;
