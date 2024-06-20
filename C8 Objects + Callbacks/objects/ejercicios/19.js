function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  for(var user of objetoMuchosUsuarios){
    user.esPremium = true;
  }
  return objetoMuchosUsuarios;
}

//1y

module.exports = pasarUsuarioAPremium;
