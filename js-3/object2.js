//1- Crea un objeto literal
let persona = {
    nombre: "Gabriel",
    edad: 28,
    ciudad: "Cartagena",
    profesion: "Odontologo"
}

//2- Imprime en la consola el objeto "persona" completo
console.log(persona);

//3- Crea una función llamada "presentacion"
function presentacion(objeto) {
    let resultado = "";

    // Object.keys() devuelve un arreglo de propiedades enumerables propias de un objeto dado
    let llaves = Object.keys(persona);
    for (let i=0; i < (llaves.length-1); i++) {
        let llave = llaves[i];
        resultado += `${llave}: ${persona[llave]}\n`;
    }
    return resultado
}

//4- Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje"
let mensaje = (presentacion(persona));

//5- Imprime en la consola el valor de la variable "mensaje"
console.log(mensaje);

//6- Agrega una nueva propiedad al objeto "persona" llamada "hobbies"
persona.hobbies= ["programar", "ciclismo","guitarra"];

//7- Imprime en la consola la propiedad "hobbies"
console.log(persona.hobbies);

//8- Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies
//Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto
for (let hobbie of Object.values(persona.hobbies)) {
    console.log(hobbie)
};
