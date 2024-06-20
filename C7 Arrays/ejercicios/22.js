function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var A=[];
  for(i=0;i<11;i++){
    A.push(i*6);
  }
  console.log(A);
  return A;
}
tablaDelSeis();
module.exports = tablaDelSeis;
