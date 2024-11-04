Array.prototype.media = function () {
  // No es un array
  if (!Array.isArray(this)) {
    return "No era un array";
  }

  // Es un array vacío
  if (this.length == 0) {
    return "El array estaba vacío";
  }

  let total = this.reduce((contador, valor) => { // los argumentos son un contador y el valor actual del bucle (como si fuera [i])
    return contador + valor; // Suma cada valor al contador (suma de los valores anteriores)
  }, 0); // El valor del contador al iniciar

  if (isNaN(total)){
    return "No era un array de números";
  }

  return total / this.length;
}

let numeros = [2, 4, 6, 8, 10, 12, 14, 16];
// let numeros = [];
// let numeros = [2, 4, 6, 8, 10, 'GAZAPO', 14, 16];

console.log(numeros.media());
