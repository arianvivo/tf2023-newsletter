var estiloCheckBox = document.getElementById("estilo");

estiloCheckBox.addEventListener('change', function() {
  var hojaEstilos = document.getElementById("estilo-modo");
  if (this.checked) {
    console.log("Modo oscuro...");
    hojaEstilos.setAttribute("href", "./css/dark-styles.css");
  } else {
    console.log("Modo claro...");
    hojaEstilos.setAttribute("href", "./css/light-styles.css");
    
  }
});