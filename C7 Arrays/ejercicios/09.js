function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   if (array.length===1){
      return array[0];
   }else {
   max=array.length;
   min=0;
   const minCeiled = Math.ceil(min);
   const maxFloored = Math.floor(max);
   F= Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
   return array[F]; 
   }
}

module.exports = obtenerElementoAleatorio;
