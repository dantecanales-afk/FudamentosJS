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

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

function ejercicio16() {
   let nombre1 ="dantesillo"
   let prducto1="monitor"
   let precio1=100000
   let descuento1 =0.2
   let descuento2=0.1
   if(precio1 >=100000) {
      alert(`el cliente ${nombre1.toUpperCase()} es un cliente premium por lo que se le aplica un 20% de descuento a su producto: ${prducto1.toLowerCase()} de $${precio1},
el precio final seria $${precio1 - (precio1 * descuento1)}`)}
else if(precio1 >=50000) {
   alert(`el cliente ${nombre1.toUpperCase()} es un cliente frecuente por lo que se le aplica un 10% de descuento a su product: ${prducto1.toLowerCase()}o de $${precio1},
el precio final seria $${precio1 - (precio1 * descuento2)}`)}

else {
   alert(`el cliente ${nombre1.toUpperCase()} es un cliente normal por lo que no se aplica un de descuento a su producto: ${prducto1.toLowerCase()} de $${precio1},
el precio final seria $${precio1}`)}


   }





// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación
function ejercicio17() {
   

   
}

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado
function ejercicio18() {
   let name ="Dante"
   let nota1 =2.9
   let nota2 =7.0
   let nota3 =6.7
   let promedio= (nota1 + nota2 + nota3) /3
   if (promedio >= 6){
      alert(`El estudiante le fue exelente ${name.toUpperCase()} que tiene ${name.length} caracteres, tiene un promedio final de ${promedio}`)
   }
   else if(promedio => 4){
      alert(`El estudiante ha aprobado ${name.toUpperCase()} que tiene ${name.length} caracteres, tiene un promedio final de ${promedio}`)
   }
   else {
   alert(`El estudiante ha reprobado ${name.toUpperCase()} que tiene ${name.length} caracteres, tiene un promedio final de ${promedio}`)

   } 
}
// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre
function ejercicio19() {
   let name="dantesillo"
   let n1=4.4
   let n2=7-0
   let n3=5.5
   let pr= (n1 + n2 + n3)/3
   let NonmbreMayus =name.toUpperCase()
   if(promedio => 6.5){
      alert(`Desempeño sobreSaliente. el estudante ${NonmbreMayus} tuvo un promedio final de ${pr}. su nombre tiene una cantidad de ${name.length} caracteres.`)
   }
   else if(promedio => 6.0){
      alert(`Muy Bien resultado. el estudante ${NonmbreMayus} tuvo un promedio final de ${pr}. su nombre tiene una cantidad de ${name.length} caracteres.`)
   }
   else if(promedio => 5.0){
      alert(`Buen rendimiento. el estudante ${NonmbreMayus} tuvo un promedio final de ${pr}. su nombre tiene una cantidad de ${name.length} caracteres.`)
   }
   else if(promedio => 4.0){
      alert(`Suficiente. el estudante ${NonmbreMayus} tuvo un promedio final de ${pr}. su nombre tiene una cantidad de ${name.length} caracteres.`)
   }
   else{
      alert(`Reprovado. el estudante ${NonmbreMayus} tuvo un promedio final de ${pr}. su nombre tiene una cantidad de ${name.length} caracteres.`)
   }

   }
// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación
function ejercicio20() {
   
   
   
   
}


// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta
function ejercicio21() {
   

}

