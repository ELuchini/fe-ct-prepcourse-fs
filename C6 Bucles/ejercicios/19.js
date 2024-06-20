function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  // Si n es menor que 1.......
  if (n < 0) {
    negativo=-1 ;
  } else {
    negativo=0;
  }

  // Calcular la suma utilizando una fórmula matemática
  let suma = (n * (n + 1)) / 2;

  return suma+negativo;
}

module.exports = sumarHastaN;
