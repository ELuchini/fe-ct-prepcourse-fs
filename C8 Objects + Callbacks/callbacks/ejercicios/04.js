function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   arg= 0;
   for(i=0;i<arrayOfNumbers.length;i++){
      arg= arg + arrayOfNumbers[i];
   }
   cb(arg);
}

module.exports = sumarArray;
