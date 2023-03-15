function max(numeros){
    let numMayor = numeros[0];
  
    for (let i=1; i< numeros.length; i++ ){
      if (numMayor < numeros[i]);
        numMayor = numeros[i];
    }
    return numMayor;
  }
  

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined