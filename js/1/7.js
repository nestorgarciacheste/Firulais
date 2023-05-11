let navegador = navigator.userAgent.toLowerCase();

if (navegador.indexOf("msie") !== -1) {
  console.log("Estás usando Internet Explorer.");
  window.location.href = "pagina_ie.html";
} else if (navegador.indexOf("firefox") !== -1) {
  console.log("Estás usando Mozilla Firefox.");
  window.location.href = "pagina_firefox.html";
} else {
  console.log("No se pudo determinar el navegador.");
}
