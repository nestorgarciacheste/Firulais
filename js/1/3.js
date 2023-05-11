let texto = prompt("Introduce un texto: ");
let palabras = texto.split(" ");
let cantidadPalabras = palabras.length;
let primeraPalabra = palabras[0];
let ultimaPalabra = palabras[cantidadPalabras-1];

document.write(`El texto tiene ${cantidadPalabras} palabras. La primera palabra es "${primeraPalabra}" y la última palabra es "${ultimaPalabra}".`);
