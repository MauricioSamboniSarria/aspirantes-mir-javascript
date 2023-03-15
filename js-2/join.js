function join(arreglo) {
    let cadena = "";
    let cadena1 = "";

    if (arreglo.length > 0) {
        for (let caracter of arreglo) 
            cadena = cadena + caracter + " ";
        for (let i=0; i<(cadena.length-1); i++)
          cadena1 = cadena1 + cadena[i];
    }
    cadena = "'" + cadena1 + "'";

    return cadena;
}


console.log(join(["Hola", "Mundo"])) // 'Hola Mundo'
console.log(join(["Make", "It", "Real"])) // 'Make It Real'
console.log(join([])) // ''