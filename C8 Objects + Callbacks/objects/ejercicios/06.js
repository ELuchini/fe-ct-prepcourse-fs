const listarPropiedades = require("../ejercicios/05");
const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  ArrProp = listarPropiedades(objeto);
  return ArrProp.length;
};
var Anos = {};
Anos["Meses"] = ["Enero", "Marzo", "Junio"];
Anos["Semanas"] = 54;
console.log(contarPropiedades(Anos));



//1y1
module.exports = contarPropiedades;
