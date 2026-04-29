console.log("conexion exitosa")

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
   let nota=6.5

   if (nota >= 6.0) {
   alert(`Excelente rendimiento`);
   } else if (nota >= 4.0) {
   alert (`Estudiante aprobado`);
   } else {
   alert(`Estudiante reprobado`);
   }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
   let nombre="Dante Canales"
   alert(`El nombre convertido es ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres`)


}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
   let correo="dantesillo@gmail.com"
   if(correo.length >= 15)
      {alert(`el correo ${correo.toLowerCase()} tiene 15 caracteres o mas, esta aprobado`)
   }
   else
   {alert(`el correo ${correo.toLowerCase()} es demasiado corto`)
   }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
   let frase="Estoy aprendiendo JavaScript"
   if(frase.length >= 20){
      alert(`La frase es demasiado larga`)
   } else if (frase.length >= 11) {
   alert (`la frase es mediana`)
   }

   else
   {alert(`La frase es demasiado corta`)

   }

   

}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let producto ="TECLADO"
let precio =50000
let descuento=0.1
alert(`El producto ${producto} tiene un precio final de $${precio - (precio*descuento)}`)
}
