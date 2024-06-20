function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let i = 0;
  A=[];
  

  do {
    i = i + 1;
    if (i == 5) {
      continue;
    }
    num += 2;
    A.push(num);
    // if (num===i) {
    //   return "Se interrumpió la ejecución"
    // }
  } while (i < 10);

  return A;
}

module.exports = continueStatement;
