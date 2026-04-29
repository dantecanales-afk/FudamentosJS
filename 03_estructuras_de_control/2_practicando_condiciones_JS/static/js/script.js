console.log("conexion exitosa")


// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {

   let nombre="juan"
   alert(`Bienvenido ${nombre}`)
}

// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
   let num1=10
   let num2=5
   let resultado=num1+num2
   alert(`La suma es: ${resultado}`)


}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
   let nums1=14
   let nums2=2
let resultado1=nums1-nums2
alert(`La resta es: ${resultado1}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
   let digito1=12
   let digito2=2
   let resultado2=digito2*digito1
   alert(`La multiplicacion es: ${resultado2}`)

}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
   let nota1=5.4
   let nota2=6.0
   let sumaNotas=nota1+nota2
   let promedio=sumaNotas/2
   alert(`El promedio seria: ${promedio}`)

}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
   let edad=18

   if(edad >= 18) { 
   alert(`eres mayor de edad`);
   } else {
   alert(`eres menor de edad `);
   }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
   let numero1=8
   if(numero1 % 2 ===0){ 
   alert(`El numero es par`)
   }
   else {
   alert(`El numero es impar`)
   }


}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
   let nota=6.0
   if(nota > 5.0){
      alert(`Haz aprobado`)
   }
   else {
      alert(`No haz aprobado`)
   }

}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
   let precioOriginal=20000
   let descuento=0.1
   alert(`precio final con descuento ${precioOriginal- precioOriginal* descuento}`)

}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
   let numerico=21
   if(numerico > 22){
      alert (`EL numero es mayor a 22`)
   }
   else{
      alert(`el numero es menor que 22`)
   }

}
