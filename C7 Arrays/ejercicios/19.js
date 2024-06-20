function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  salIda=0;
  if(arguments.length>0){
    salIda= parseInt(arguments[0]);
    for(i=1; i<(arguments.length) ;i++) {
      salIda *= parseInt(arguments[i]);
      // console.log(parseInt(arguments[i]));
    }
  }
  // console.log(arguments.length);
  // console.log(arguments[0]);
  // console.log(salIda);
  // console.log('------------------------------');

  return salIda;
}

multiplicarArgumentos('5','5');
multiplicarArgumentos('1','5','8');
multiplicarArgumentos();

module.exports = multiplicarArgumentos;
