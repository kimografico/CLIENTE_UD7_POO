Array.prototype.media = function () {
  let contador = 0;
  let total = 0;
  
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      if (isNaN(this[i])) {
        return "No era un array de numeros";
      }
      total += this[i];
      contador++;
    }
    return total / contador;
  } else {
    return "No era un array";
  }
};

let numeros = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(numeros.media());
