/* function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  ArrTexto = texto.split("");
  ArrInvert = [];
  TInvert ="";
  LG= ArrTexto.length;
  // console.log(ArrTexto);
  ArrTexto.forEach((element, inD) => {
    // console.log("El indice es "+ inD + " y el valor " + element);
    ArrInvert.unshift(element);
  });
  TInvert = ArrInvert.join("");

  return TInvert;
} */
const invertirTexto = require('../ejercicios/31');

function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  INV= invertirTexto(string);
  if (string===INV){
    return true;
  }
  return false;
}



TST= "MANUELITA"
TST1= "ANANA"
console.log(TST + " ES PALINDROMO?: " + esPalindromo(TST));
console.log(TST1 + " ES PALINDROMO?: " + esPalindromo(TST1));

module.exports = esPalindromo;