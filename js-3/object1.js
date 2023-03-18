//1- Crea una variable llamada pedro de tipo objeto literal
let pedro = {
    nombre: "Pedro Perez",
	edad: 30,
	activo: true,
    hobbies: ["programar", "squash","piano"],
}

//2- Imprime en la consola el valor de la llave edad
console.log(pedro.edad + "\n");

//3- Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8; 

//4- Elimina la propiedad con llave activo
delete pedro.activo;

/*5- Recorre todas las propiedades e imprímelas en consola 
     (una línea por propiedad y separando la llave y el valor con dos puntos : */
function imprimePropiedades(objeto) {
    let resultado = "";

    for (let i in pedro) {
        // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
        if (pedro.hasOwnProperty(i)) 
            resultado += `${i}: ${objeto[i]}\n`;
    }    
    return resultado
}
console.log (imprimePropiedades(pedro));

//6- Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona
pedro.saluda= function() {
    console.log("Hola, me llamo " + this.nombre);
}

//7- Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
pedro.saluda();
