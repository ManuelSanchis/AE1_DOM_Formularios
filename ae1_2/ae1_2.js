
// Funcion que comprueba que todos los campos del formulario esten debidamente cumplimentados
function validar() {

  if (nombre.value.trim() == "") {
    alert("El nombre es obligatorio");
  }

  if (direccion.value.trim() == "") {
    alert("La dirección es necesaria");
  }

  if (telefono.value.trim() == "") {
    alert("El telefono es obligatorio");
  }

  if (email.value.trim() == "") {
    alert("Necesitamos un email");
  }

  if (!peq.checked && !med.checked && !fam.checked) {
    alert("¿De que tamaño quieres tu pizza?");
  }

  if (
    !masaEsp.checked &&
    !pienso.checked &&
    !salsaEsp.checked &&
    !aceitunas.checked
  ) {
    alert("¡Debes elegir al menos un ingrediente!");
  }
}

// Funcion que calcula el precio total del pedido
function calcularPrecio() {
  let ingredientes = [masaEsp, salsaEsp, pienso, aceitunas];
  let total = 0;

  if (peq.checked) {
    total = 5;
  } else if (med.checked) {
    total = 10;
  } else if (fam.checked) {
    total = 15;
  }

  for (let i = 0; i < ingredientes.length; i++) {
    if (ingredientes[i].checked) {
      total += 1;
    }
  }

  alert(`¡Nos debes ${total} €!`);
}

button.onclick = function () {
  validar();
  calcularPrecio();
};
