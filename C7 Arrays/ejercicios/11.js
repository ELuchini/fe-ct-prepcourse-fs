function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  const map1 = array.map((x) => x * 2);
  return map1;
}

module.exports = duplicarElementos;
