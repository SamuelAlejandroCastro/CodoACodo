
// console.log("Hola alumnos de codo a codo!!! :)")
// document.write("<h3 style='color:red;'> texto agregado por JS </h3>")
// console.warn("texto de alerta");
// console.error("Mensaje de error")
// console.info(12)
// document.write("Hola desde js externo")

// variables en JS

var edad // variable indefinida
var edad2 = 36
console.log(typeof edad2)
var edad2 = "Juan Pablo"
console.log(typeof edad2)
var edad2 = true
console.log(typeof edad2)
// constantes
// const iva = 25
// console.log(iva)
// iva = 10  //error
//convertir cosas a enteros con parseint

var variable = "42"
console.log("parseInt (42) ", Number.parseInt("42")+1) // 43
console.log("parseInt (42) ", Number.parseInt("42"+1)) // 421

// funcion prompt()
var edad = prompt("Ingrese su edad")  //36
document.write("Tu edad es:", edad)
document.write("<br>")
document.write(Number.parseInt(edad) + 8)
