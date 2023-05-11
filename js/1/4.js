let texto = prompt("Introduce un texto: ");
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

document.write(`El texto invertido es "${textoInvertido}".`);
