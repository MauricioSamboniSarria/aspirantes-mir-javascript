function maxIndex(numeros){
  let numMayor = numeros[0];
  let indice = 0;
  
  if (numeros.length > 0){
    for (let i = 1; i< numeros.length; i++ ){
      if (numMayor < numeros[i]){
        numMayor = numeros[i]
        indice = i;
      }
    }
  }else{
    indice = -1;
  }
  return indice;                                     
}
  
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1