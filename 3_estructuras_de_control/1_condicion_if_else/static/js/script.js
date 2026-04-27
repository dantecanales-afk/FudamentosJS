console.log("conexion correcta con JS")

/*
1. que es una condicion?
una condicion nos permte tomar deciciones en el codigo separando dos caminos
el si(if) y el no(else)

estructura basica:(sintaxis)--> reglas del lenguaje del programacion

if(condicion) {
codigo que se ejecuta si la condicion es verdadera (if)}

else(condicion) {
codigo se ejecuta si la condicion es falsa(else)}
*/

//ejemplo 1°(numerico) --if
let edad= 18
if(edad >= 18) { 
    console.log(`eres mayor de edad`)
 }


 //ejemplo 2°(dos caminos posibles)
 let temperatura= 10
 if(temperatura >20){
    console.log(`hace calor`)
 }
 else(temperatura <20);{
    console.log(`hace frio`)
 }
 //ejemplo 3°: if - // else ( multiples condiciones)
 let nota = 5.5
 if(nota >=5.5){
    console.log("EXELENTE!");

 }
 else(nota <4.0) ;{
    console.log("reprovado:(");
 }
 
 //ejemplo 4°: condiciones con string
    
    let nombre = "Dante"

    //comparacion exacta (===)
    if (nombre === "Dante"){
        console.log("hola dantesillo")
    }
    else {
        console.log("no eri el dantesillo won")
    }
    /* operadores de comparaciones
    <mayor que
    >menor que
    <=menor o igual
    >=mayor o igual
    === estricta igualdad
    */
    let num = 10
    let num2 = 0
    if(num !== num2){
        console.log(`el numero: ${num} es distinto que ${num2}`)
    } else{
        console.log("son iguales")
    }
