function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  // Verificar si el array está vacío
  
  if (array.length === 0) {
    return undefined; // Array vacío, no hay último elemento
  }

  // Obtener el último elemento utilizando la longitud del array
  const ultimo = array.length - 1;
  const elementoUltimo = array[ultimo];

  // Imprimir el último elemento para debug (opcional)
  console.log(ultimo);
  console.log(elementoUltimo);

  // Retornar el último elemento
  return elementoUltimo;
}

// devolverUltimoElemento([10,10,16]);

module.exports = devolverUltimoElemento;
