function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  cuenta = 0;
  array.forEach(element => {
    if (element > 10){
      cuenta++;
    }
  });
  return cuenta;
}

const myArray = [];

// Loop to generate 20 random numbers between 5 and 30 (inclusive)
for (let i = 0; i < 20; i++) {
  myArray.push(Math.floor(Math.random() * (30 - (-5) + 1)) + (-5));
}
console.log(myArray);
console.log(contarElementosMayoresA10(myArray));


module.exports = contarElementosMayoresA10;
