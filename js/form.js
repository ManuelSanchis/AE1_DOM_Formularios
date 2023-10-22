//Seleccionamos mediante los ID los diferentes elementos del formulario que necesitamos
let pizzaS = document.getElementById("pequenya");
let pizzaM = document.getElementById("mediana");
let pizzaG = document.getElementById("grande");

let tomate = document.getElementById("tomate");
let queso = document.getElementById("queso");
let pepperoni = document.getElementById("pepperoni");
let champinyones = document.getElementById("champinyones");

//Creamos un array con el que posteriormente trabajaremos porque necesitaremos recorrerlo más adelante
let ingrArr = [tomate, queso, pepperoni, champinyones];

//Creamos la variable que selecciona el button
let btn = document.getElementById("btn");

//Esta función calcula el total del pedido
//Para la elección de la pizza usamos un condicional ya que radio button solo permite seleccionar una opción
//Luego recorremos con un for el array de ingredientes y si está seleccionado le decimos que lo añada al total del precio
//Además, validaremos que los campos de texto sean rellenados y que al menos se elija una pizza y un ingredientes
btn.onclick = function () {
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

  if (!pizzaS.checked && !pizzaM.checked && !pizzaG.checked) {
    alert("Elige una pizza, por favor");
  }

  if (
    !tomate.checked &&
    !pepperoni.checked &&
    !queso.checked &&
    !champinyones.checked
  ) {
    alert("Elige un ingrediente");
  }

  let totalPedido = 0;

  if (pizzaS.checked) {
    totalPedido = 5;
  } else if (pizzaM.checked) {
    totalPedido = 10;
  } else if (pizzaG.checked) {
    totalPedido = 15;
  }

  for (let i = 0; i < ingrArr.length; i++) {
    if (ingrArr[i].checked) {
      totalPedido += 1;
    }
  }

  totalPedido += " euros";
  alert(totalPedido);
};
