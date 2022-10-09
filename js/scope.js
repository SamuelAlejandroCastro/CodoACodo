function  funcion (){
    var variable ="local"

    var2 = "global"
}

console.log(var2)
console.log(variable)

var a = 5
var b = 10
if (a===b){
    let a = 4
    console.log("a = ",a)
}
console.log("a = ",a)
console.log("b = ",b)

// objetos a través de = new object
var vivienda = new Object()
console.log(vivienda) //vacio

// Defino propiedades
vivienda.calle = "triunvirato"
viviendo.numero = 4570
vivienda.ambientes = 3

// defino comportamiento a traves de funcion
vivienda.mostrarDomicilio = function(){
    console.log("la vivienda esta ubicada en:", vivienda.calle, vivienda.numero)
}

//principal
vivienda.mostrarDomicilio()
