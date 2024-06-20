function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

    // Variables para el bucle
    let vecesAumentadas = 0;
    let nuevoValor = num;
  
    // Bucle do-while para aumentar el valor
    do {
      // Aumentar el valor de "nuevoValor" en 5
      nuevoValor += 5;
  
      // Incrementar el contador de veces aumentadas
      vecesAumentadas++;
  
      // Comprobar si se ha alcanzado el límite de 8 aumentos
    } while (vecesAumentadas < 8);
  
    return nuevoValor;
}

module.exports = doWhile;