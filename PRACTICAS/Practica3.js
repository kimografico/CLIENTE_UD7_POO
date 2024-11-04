function Ordenador(marca, modelo, ram = 4, hdd = 512, pulgadas = 17){
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.hdd = hdd;
    this.pulgadas = pulgadas;

    this.toString = function(){
        return '\n' + marca + ' ' + modelo + '\n--------\n' + 'RAM: ' + ram + 'GB' + '\nDisco Duro: ' + hdd + ' GB' + '\nMonitor: ' + pulgadas + ' pulgadas\n';
    }
};

function Portatil(marca, modelo, ram = 4, hdd = 256, pulgadas = 12, autonomia = 4){
    Ordenador.call(this, marca, modelo, ram, hdd, pulgadas) // Se llama al padre, y se define al hijo como 'this'
    this.autonomia = autonomia;

    this.toString = function(){
        return '\n' + marca + ' ' + modelo + '\n--------\n' + 'RAM: ' + ram + 'GB' + '\nDisco Duro: ' + hdd + ' GB' + '\nMonitor: ' + pulgadas + '\nAutonomía: ' + autonomia + 'h\n';
    }
}
// HERENCIA • El PROTOTIPO de PORTATIL se crea a partir del PROTOTIPO de ORDENADOR
// Esto hace que Portatil herede los métodos de Ordenador. Aqui no haría falta ya que no hay mas metodos que el sobreescrito toString, pero quien sabe si en un futuro...
Portatil.prototype = Object.create(Ordenador.prototype); 

// CONSRUCTOR • El CONSTRUCTOR del PROTOTIPO de PORTATIL es PORTATIL
// Esto define el constructor de Portatil, ya que si no se construiría como Ordenador
Portatil.prototype.constructor = Portatil; 

let unOrdenador = new Ordenador("Acer", "MattBlack");
console.log(unOrdenador.toString());

let unPortatil = new Portatil("HP", "Envy");
console.log(unPortatil.toString());