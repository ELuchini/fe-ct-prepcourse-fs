function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  ArrTexto = texto.split("");
  ArrInvert = [];
  TInvert ="";
  LG= ArrTexto.length;
  // console.log(ArrTexto);
  ArrTexto.forEach((element, inD) => {
    console.log("El indice es "+ inD + " y el valor " + element);
    ArrInvert.unshift(element);
  });
  TInvert = ArrInvert.join("");

  return TInvert;
}

console.log("Normal Es HIPOCRESÍA")
console.log("Invertido es " + invertirTexto("HIPOCRESÍA"));

module.exports = invertirTexto;
