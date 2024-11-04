/* 
Crea un objeto llamado libro con las siguientes propiedades:
•	titulo: "Cien Años de Soledad"
•	autor: "Gabriel García Márquez"
•	paginas: 417
•	añoPublicacion: 1967

Utiliza un bucle para recorrer todas las propiedades del objeto
e imprime cada propiedad y su valor.
*/

let Libro1 = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    paginas: 417,
    añoPublicacion: 1967
}

console.log("\n");
for (const param in Libro1) {
    console.log(param + ": " + Libro1[param]);        
}
console.log("\n");