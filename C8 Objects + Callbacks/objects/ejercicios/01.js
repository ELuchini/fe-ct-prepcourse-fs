const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];

   return a;
};

T= {
   TIPO: "ANIMALES",
   COLOR: "ANIMAL SPRINT"
}

console.log(obtenerValorPropiedad(T,"COLOR"));


module.exports = obtenerValorPropiedad;
