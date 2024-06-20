function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) {
    return true; // Empty array is considered equal
  }

  const firstElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== firstElement) {
      return false; // Element is not equal to the first element
    }
  }

  return true; // All elements are equal
}

module.exports = todosIguales;
