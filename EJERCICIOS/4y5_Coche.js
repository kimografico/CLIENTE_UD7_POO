/* 
Crea una función constructora llamada Coche que tenga las propiedades:
•	marca
•	modelo
•	año
•	Un método detalles que devuelva una cadena de texto 
    con la marca, el modelo y el año del coche.
Crea dos instancias de Coche y llama al método detalles para cada uno.

Utiliza el ejercicio anterior del constructor Coche. 
Ahora añade un método al prototipo de Coche llamado encender, que 
imprima "El coche [marca] [modelo] ha sido encendido".

Llama al método encender en alguna de las instancias de Coche. 
*/

function Coche(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.detalles = function() {
        return "\nMarca: " + this.marca + "\nModelo: " + this.modelo + "\nAño: " + this.anio + "\n";
    };
}

let Coche1 = new Coche("Renault", "Megane", 2002);
let Coche2 = new Coche("Volkswagen", "Tiguan", 2008);

console.log(Coche1.detalles());
console.log(Coche2.detalles());

Coche.prototype.encender = function(){
    return "El coche marca " + this.marca + " modelo " + this.modelo + " ha sido encendido.\n"
}

console.log(Coche2.encender());