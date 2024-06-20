function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  Salida=[];
  for(i=0;i<array.length;i++){
    if (Number.isInteger(array[i]) && array[i]%2 === 0){
      Salida.push(array[i]);
      // console.log(Salida);
    }
  }
  return Salida;

}

// filtrarNumerosPares(['HGoa',20,'Nombre','Fin',0.5,25,32]);

module.exports = filtrarNumerosPares;
