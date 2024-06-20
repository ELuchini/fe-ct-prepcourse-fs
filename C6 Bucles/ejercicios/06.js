function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  // console.log(num.toString().length)
  if(num.toString().length === 3){
    return true;
  } else {
    return false;
  }
  
}

// console.log(tieneTresDigitos(111));

module.exports = tieneTresDigitos;
