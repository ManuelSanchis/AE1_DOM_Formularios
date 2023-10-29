
// Funcion que comprueba que todos los campos del formulario esten debidamente cumplimentados
function validar() {

  if (nombre.value.trim() == "") {
    alert("¡Dinos tu nombre!");
  }

  if (direccion.value.trim() == "") {
    alert("¡Si no sabemos tu dirección no te podremos enviar el pedido!");
  }

  if (telefono.value.trim() == "") {
    alert("¿Cual es tu número de teléfono?");
  }

  if (email.value.trim() == "") {
    alert("¡Dinos tu email!");
  }

  if (!peq.checked && !med.checked && !fam.checked) {
    alert("¿Cuanta hambre tienes hoy?");
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
