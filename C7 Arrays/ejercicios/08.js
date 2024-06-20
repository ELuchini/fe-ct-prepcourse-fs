function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:

   M= array.findIndex((element) => element === num);
   console.log(M);
   return M;
}

// encontrarElemento(5,[8,5,9,8,4]);

module.exports = encontrarElemento;
