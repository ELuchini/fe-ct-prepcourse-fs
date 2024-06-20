function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // Casos base (0 y 1): no son primos
  if (numero === 0 || numero === 1) {
    return false;
  }

  // Dividir por números desde 2 hasta la raíz cuadrada del número
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    // Si el número es divisible por el divisor, no es primo
    if (numero % divisor === 0) {
      return false;
    }
  }

  // Si el bucle termina sin encontrar divisores, el número es primo
  return true;
}

module.exports = esNumeroPrimo;
