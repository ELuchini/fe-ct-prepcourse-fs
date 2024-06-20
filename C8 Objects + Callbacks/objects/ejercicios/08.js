function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  var Anim ={}
  Anim.nombre = nombre;
  Anim.edad =  edad;
  Anim.meow = function () {
     return "Meow!";
  }

  return Anim;
}

const T = crearGato("Laucha",15);
console.log(T.meow());
console.log(T);




//1y2
module.exports = crearGato;
