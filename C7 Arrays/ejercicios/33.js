function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  LG1= str1.length;
  LG2= str2.length;
  LG3= str3.length;
  LGT= LG1+LG2+LG3;
  RSTTemp=[];
  for(i=0; i<LGT ;i++){

    if (str1[i]){
      RSTTemp.push(str1[i]);
    }

    if (str2[i]){
      RSTTemp.push(str2[i]);
    }

    if (str3[i]){
      RSTTemp.push(str3[i]);
    }

  }
    RST=RSTTemp.join("");
    return RST;
}

console.log("El resultado es: "+combine("abc", "", "123"));

module.exports = combine;