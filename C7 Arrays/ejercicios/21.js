function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  if (array.length < 3) {
    return "No se encontraron los meses pedidos"; // Por array sin cantidad suficiente. 
  }
  E1= array.find((element) => element ==="Enero");
  E2= array.find((element) => element ==="Marzo");
  E3= array.find((element) => element ==="Noviembre");
  S1=[];
  

    if (E1!=undefined && E2!=undefined && E3!=undefined) {
      S1.push(E2);
      S1.push(E3);
      S1.push(E1);
      return S1;
    } else {
      return "No se encontraron los meses pedidos"; 
    }

  console.log(S1);
  return S1;
}

module.exports = mesesDelAño;
