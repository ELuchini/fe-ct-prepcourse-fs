function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

    // Si el número es 1, es una potencia de 2
    if (numero === 1) {
      return true;
    }
  
    // Dividir el número por 2 mientras sea mayor que 1
    while (numero > 1) {
      // Si el residuo de la división es diferente de 0, no es potencia de 2
      if (numero % 2 !== 0) {
        return false;
      }
  
      // Dividir el número entre 2 para continuar la comprobación
      numero /= 2;
    }
  
    // Si el bucle termina con numero = 1, es una potencia de 2
    return true;
}

module.exports = esPotenciaDeDos;
