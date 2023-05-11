let email = prompt("Introduce una dirección de correo electrónico: ");
let arroba = email.indexOf("@");

if (arroba !== -1) {
  document.write(`La dirección de correo electrónico "${email}" es válida.`);
} else {
  document.write(`La dirección de correo electrónico "${email}" no es válida.`);
}
