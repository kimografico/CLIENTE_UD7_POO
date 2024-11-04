function Punto(x, y){
    this.cambiar = function(x2, y2){
        this.x = isNaN(x2) ? 0 : x2; // this = x es NaN ? SI : NO
        this.y = isNaN(y2) ? 0 : y2; // this = y es NaN ? SI : NO
    }

    this.cambiar(x, y);

    this.copia = function(){
        return this.cambiar(this.x, this.y);
    }

    this.coordinates = function(){
        return this.x + ', ' + this.y; // Para no estar viendo lo de [function] cada vez en el console.log...
    }

    this.suma = function(otroPunto) {
        if (otroPunto instanceof Punto) {  // ¿Y si no es un punto?
            const a = this.x + otroPunto.x;
            const b = this.y + otroPunto.y;
            return new Punto(a, b);
        } else {
            console.log("Lo que has pasado no es un Punto");
        }
    }
}

let punto1 = new Punto('a', 34);
console.log(punto1.coordinates()); // Devuelve 0, 34

let punto2 = new Punto(12, 34);

let punto3 = new Punto(10, 10);
console.log(punto3.coordinates());

punto3.cambiar(20,20);
console.log(punto3.coordinates());  // Devuelve 20, 20

let punto4 = punto2.suma(punto3);
console.log(punto4.coordinates()); // Devuelve 32, 54