/* 
 Crea un objeto llamado persona con las siguientes propiedades:
•	nombre: "Juan"
•	edad: 30
•	profesion: "Ingeniero"
•	Un método presentarse que devuelva una cadena de texto 
    presentando a la persona con su nombre y profesión.
Llama al método presentarse e imprime el resultado en la consola

Modifica el objeto persona para incluir un método cumplirAnios
que incremente la edad de la persona en 1 utilizando el objeto this. 
Llama al método cumplirAnios e imprime la edad actualizada. 
*/

    let persona = {
        nombre : "Juan",
        edad: 30,
        profesion: "ingeniero",
        presentarse: function(){
            return this.nombre + ', ' + this.edad + ' años. Profesión: ' + this.profesion;
        }
    }

    console.log(persona.presentarse());

    persona.cumplirAnios = function(){
        this.edad += 1;
    }

    persona.cumplirAnios();
    
    console.log(persona.edad);