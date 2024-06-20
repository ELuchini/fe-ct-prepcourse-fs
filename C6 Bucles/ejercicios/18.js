function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

    // Ordenar los argumentos de menor a mayor
    if (a > b) {
      let j=b;
      b=a;
      a=j;
    }
  
 // Calcular el producto
 let producto = 1;
 let i = a;
 do {
   producto *= i;
   i++;
 } while (i <= b);

 if(producto===-0) {
  producto=producto*producto;
 }
 return producto;
  
}

console.log(productoEntreNúmeros(5,-5))

module.exports = productoEntreNúmeros;