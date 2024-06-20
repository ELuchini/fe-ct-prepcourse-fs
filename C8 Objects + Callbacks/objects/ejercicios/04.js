function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   var Sal = objeto.hasOwnProperty(propiedad);
   console.log(Sal);
   return Sal;
}

//1y2
module.exports = verificarPropiedad;
