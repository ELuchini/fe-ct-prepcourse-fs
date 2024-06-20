const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;

};

var Musica ={};

agregarNuevaPropiedad(Musica, "Nom. Banda", ["Megadeth", "Metallica", "Hermetica"]);
console.log(Musica["Nom. Banda"]);


//1y4
module.exports = agregarNuevaPropiedad;
