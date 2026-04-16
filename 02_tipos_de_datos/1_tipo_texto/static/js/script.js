console.log("conexion con js correcta...");
/*
concatenación con el signo +
podemos unir texto y variables
*/
const nombre = "Dante";
const apellido = "Canales";
//unimos ambas constantes con un texto extra
console.log("Hola, mi Nombre es: " + nombre + " " + apellido);


/*
2- ver el tipo de dato (typeof)
*/
console.log("la variable nombre es un tipo de dato: " + typeof nombre);
/* Template literals (forma moderna de concatenar) */
console.log(`Hola, mi Nombre es: ${nombre} ${apellido}`);
/*mostrar el largo de un string(texto) - contar los caracteres*/

console.log(`El nombre ${nombre} tiene ${nombre.length} letras`);

const frase = "mi gato se llama atreus";
console.log(`la frase: "${frase}" tiene ${frase.length} caracteres`);

/*metodos comunes en javascript paraa formatear texto*/
/*formatear texto en mayusculas*/
let texto1 = "javaescrip"
console.log (texto1.toUpperCase());

//transformar texto a minisculas "toLowerCase" //
console.log (texto1.toLowerCase());
//buscar un texto dentro de un string "includes//

let texto2 ="leche,azucar,pera,huevos,harina";
console.log(texto2.includes("pera"));

//convertir una variable a texto//
let telefono =944322600;
let telefono_texto = Sting(telefono);
console.log(`mi numero de telefono ${telefono_texto}es de tipo: ${typeof telefono_texto}`);