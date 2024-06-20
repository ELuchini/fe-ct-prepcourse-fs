function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  L=palabras.length;

  // for(let i=0;i<((L*2)-1);i++){

  //   palabras.splice(i+1, 0, " ");
  // }
  
  Res= palabras.join(" ");
  console.log(Res);
  return Res;
}

dePalabrasAFrase(["hola","mejor","amigo"]);

module.exports = dePalabrasAFrase;
