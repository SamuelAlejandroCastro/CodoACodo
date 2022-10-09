function duplicar(x) {
console.log("el doble es:", x*2)
}

function potencia(a,b) {
    console.log("la potencia es:", a**b)
}

potencia(2,8)
duplicar(2)

// function esMayorDeEdad(miApellido, miNombre, miEdad){
//     console.log ( "apellido y nombre: ", miApellido, ",", miNombre)
//     if(miEdad>=18) {
//        console.log("Es mayor de edad (", miEdad, ")") 
//     }
//     else {
//         console.log("No es mayor de edad (", miEdad, ")")
//     }

// }
// var ape= prompt("Ingrese su apellido: ")
// var nom = prompt("Ingrese su nombre: ")
// var edad = prompt ("Ingrese su edad: ")

// esMayorDeEdad(ape,nom,edad)

//funcion anonima
var suma = function sumarCuatro(numero1, numero2){
   return numero1 + numero2 
}
console.log(suma(15,10))

function cuadrado (x) {
    return x*x
}
console.log(cuadrado(4))


var aCuadrado = x => x*x
console.log(aCuadrado(4))