const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  Evalue= "No se encontró el elemento";
  Sale = array.map(element => {
    // console.log(callback(element));
    if((callback(element))){
      Evalue= element;
    } 
  });

  return Evalue;

};

const array1 = [1, 2, 3, 4, 5];
const callback1 = element => element === 3;
console.log(buscarElemento(array1, callback1));

module.exports = buscarElemento;
