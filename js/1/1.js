let cadena = prompt("Introduce una cadena: ");
let longitud = cadena.length;
let primerCaracter = cadena.charAt(0);
let ultimoCaracter = cadena.charAt(longitud-1);

document.write(`La cadena tiene ${longitud} caracteres. El primer caracter es "${primerCaracter}" y el último caracter es "${ultimoCaracter}".`);
