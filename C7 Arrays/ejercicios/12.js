function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  RT=array.map((elem) => elem.toUpperCase())
  return RT;
}

// console.log(convertirStringAMayusculas(['hola','quetal','Feliz']));

module.exports = convertirStringAMayusculas;
