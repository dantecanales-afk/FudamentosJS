console.log("conexion exitosa con js")



// // 🔹 Ejercicio 1: Edad proyectada
// // Declara tu edad actual y calcula:
// // Tu edad en 5 años
// // Tu edad hace 10 años
// // Muestra ambos resultados en consola.
    function EdadProyectada(){
    let edad=18
alert(`mi edad es: ${edad}
En 5 años tendré: ${edad + 5}
hace 10 años tenía: ${edad - 10}`);

}
// // 🔹 Ejercicio 2: Compra con descuento
// // Un producto cuesta $25.000 y tiene un descuento del 20%.
// // Calcula el precio final
// // Muestra el resultado
function calcularDescuento(){
    let precio=25000
    let descuento=0.2
alert(`el valor es ${precio}
el descuento es ${descuento*100}%
el precio final es ${precio - (precio * descuento)}`);

}

// // 🔹 Ejercicio 3: Promedio de notas
// // Declara 3 notas decimales:
// // Calcula el promedio
// // Redondea el resultado usando Math.round()
function calcularPromedio(){
    let nota1=3.5;
    let nota2=7.0;
    let nota3=3.8;
    let suma=(nota1 + nota2 + nota3)
    alert(`el promedio es: ${suma / 3} y redondeado seria ${Math.round(4.766666666666667)}`);
}

// // 🔹 Ejercicio 4: Temperatura
// // Declara una temperatura actual en grados Celsius:
// // Auméntala en 3 grados
// // Luego disminúyela en 5 grados
// // Muestra el resultado final
function calcularTemperatura(){
    let temperaturaActual = 15
    alert(`La temperatura actual es: ${temperaturaActual} grados, aumentada 3 grados seria: ${temperaturaActual + 3} grados, y si disminuimos 5 grados seria: ${temperaturaActual + 3 - 5 } grados.`) 
}

// // 🔹 Ejercicio 5: Sueldo semanal
// // Un trabajador gana $8.000 por hora y trabaja 45 horas:
// // Calcula su sueldo
// // Si trabaja 5 horas extra, agrégalas usando incremento
// // Muestra el nuevo sueldo

function calcularSueldo(){
let sueldo = 8000
let horas = 45
let horasextras = 5
let horastotales = horas + horasextras
let nuevosueldo = sueldo * horastotales
alert(`el nuevo sueldo sera ${nuevosueldo}`)
}

// // 🔹 Ejercicio 6: División y resto
// // Declara dos números:
// // Calcula la división
// // Calcula el módulo (%)
// // Explica el resultado en consola
function divisionResta(){
    let numero1 = 5
    let numero2 = 8
    alert(`la division seria ${numero1 / numero2}
el modulo seria ${numero1 % numero2}`)

}

// // 🔹 Ejercicio 7: Comparación de números
// // Declara dos números:
// // Muestra si el primero es mayor que el segundo
// // Verifica si uno de ellos es igual a 10
function comparacion(){
let numero = 3
let numero4 = 6
alert(`el numero no es igual a 10, y el numero 1 es menor que el numero 2 ${numero > numero4}`)
}
// // 🔹 Ejercicio 8: Notación científica aplicada
// // Declara:
// // Una población usando notación científica (ej: 1e6)
// // Divide esa población en 4 grupos
// // Muestra el resultado
function notacion(){
    let población = 2e5/4
    alert(`el numerode poblacion ${población}`)
}



// // 🔹 Ejercicio 9: Potencia y cálculo combinado
// // Calcula:
// // 3 elevado a 4
// // Luego multiplícalo por 2
// // Resta 10 al resultado final
function potenciaYCalculo(){
let numeross = 3 ** 4 * 2
alert(`el resultado final es: ${numeross - 10}`)
}
// // 🔹 Ejercicio 10: Dado aleatorio 🎲
// // Simula el lanzamiento de un dado:
// // Genera un número entre 1 y 6
// // Muestra el resultado
// // Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function dadoAleatorio() {
let dado = Math.floor(Math.random()*6) + 1;
alert(`Tirar dado: ${dado}
    \nSi el numero es mayor a 4 o igual: ${dado >= 4}`)
}




