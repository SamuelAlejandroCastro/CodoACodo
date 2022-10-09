var coche = {
    // propiedades = par propiedad: valor
    marca: 'Ford',
    tipo: 'Ranger',
    modelo: 2018,
    portaequipajes: true,
    caracteristicas: function(){
        return this.marca + " "+ this.tipo +" ("+this.modelo +")"
    },
        caracteristicasDos(){
            return this.marca 
    }
    }

console.log (coche.caracteristicas())
console.log(coche.caracteristicasDos())

class Animal {
    constructor(nombre, edad, estaVivo, color, tipo) {
        this.nombre = nombre
        this.edad = edad
        this.estaVivo = estaVivo
        this.color = color
        this.tipo = tipo
    }
    dormir() {
        return this.nombre + " está durmiendo"
    }
}

var perro = new Animal("manchas", 1, true, "negro y blanco", "perro")
var gato = new Animal("pipi", 3, true, "blanco y naranja", "gato")

console.log(perro.nombre)
perro.nombre = "manchi"
console.log(perro.nombre)
console.log (gato.dormir())

function Persona(nombre, apellido, domicilio){
    this.nombre = nombre
    this.apellido = apellido
    this.domicilio = domicilio
}
var persona1 = new Persona ('Laura', "Gonzalez", "Rivadavia 124")
var persona2 = new Persona ("Joaquin", "Perez", "av Gaona 1245")
console.log(persona1.nombre, "vive en", persona1.domicilio)
console.log(persona2.nombre, "vive en", persona2.domicilio)
