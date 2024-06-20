function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  // array.forEach(element => {
  // if (array.length === 0) {
  //   return 0;
  // }

  Temp = [];
  n=array.length;

  for (i=0;i<n;i++){
    
    Temp[i]=array.pop();
    // array.unshift(Temp[i]);
    console.log(Temp);

  }
  return Temp;
}

var Ray = ['a','b','c'];

console.log(invertirArray(Ray));

module.exports = invertirArray;
