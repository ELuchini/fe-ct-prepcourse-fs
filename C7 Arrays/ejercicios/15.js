function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  Comparo= array[0];
  array.forEach(element => {
    if (Comparo<element){
      Comparo=element;
    }
  });
  
  if (array.findIndex((element) => element === Comparo)>-1){
    return array.findIndex((element) => element === Comparo);
  }
  return 0;
}

module.exports = encontrarIndiceMayor;
