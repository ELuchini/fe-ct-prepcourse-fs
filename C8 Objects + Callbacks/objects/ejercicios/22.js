function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   T1= str1.toLowerCase();
   T2= str2.toLowerCase();
   A1= T1.split("");
   A2= T2.split("");
   A1.sort();
   A2.sort();
   A1= A1.join("");
   A2= A2.join("");
   
   console.log(A1+ " " +A2);

    if (A1 == A2){
      return true;
   } else {
      return false;
   } 
}


console.log(esAnagrama("hola","lHoa"));
console.log(esAnagrama("lara","nare"));


//0y7
module.exports = esAnagrama;
