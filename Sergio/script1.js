//Obtenemos el div contenedor principal
let contenedor = document.getElementById("contenedor");

//Creamos un h1 para usar como encabezado de la página web.
let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.textContent = "Actividad 1 / Desarrollo en entorno cliente";
contenedor.appendChild(titulo);

//Colocamos la primera imagen
let img1 = document.createElement("img");
img1.src = "/Sergio/img/img1.jpg";
img1.width = "800";
img1.height = "250";
contenedor.appendChild(img1);
contenedor.appendChild(document.createElement("br")); //Añadimos espacios para separar los contenidos

//Añadimos campos de texto para el formulario

let campos = ["DNI", "Nombre", "Apellidos", "Dirección", "Teléfono"]; //Creamos un array de campos para introducirlos usando una estructura for
for (let i = 0; i < campos.length; i++) {
  let label = document.createElement("label");
  label.textContent = campos[i] + ": "; //Introducimos el valor de cada label segun el índice
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Introduzca su " + campos[i]); //Usamos el índice para colocar un placeholder en cada input
  contenedor.appendChild(label);
  contenedor.appendChild(input);
  contenedor.appendChild(document.createElement("br"));
}

//Titulo para requisito de radio button 1
contenedor.appendChild(document.createElement("br")); //Espacio entre campos
let comidas = document.createElement("h2");
comidas.textContent = "¿Cuál es tu comida cordobesa favorita?";
contenedor.appendChild(comidas);

//Añadimos dos grupos de radio button, con 4 opciones cada uno
let radio1 = ["Salmorejo", "Mazamorra", "Flamenquín", "Rabo de toro"];

for (let i = 0; i < radio1.length; i++) {
  let label2 = document.createElement("label");
  label2.textContent = " " + radio1[i];
  let rad1 = document.createElement("input");
  rad1.setAttribute("type", "radio");
  rad1.setAttribute("name", "comidaFav"); //Para que solo se pueda seleccionar uno se coloca el mismo atributo name
  contenedor.appendChild(rad1);
  contenedor.appendChild(label2);
  contenedor.appendChild(document.createElement("br"));
}

//Titulo para requisito de radio button 2
contenedor.appendChild(document.createElement("br")); //Espacio entre campos
let monumentos = document.createElement("h2");
monumentos.textContent = "¿Cuál es tu maravilla cordobesa favorita?";
contenedor.appendChild(monumentos);

//Añadimos dos grupos de radio button, con 4 opciones cada uno
let radio2 = [
  "Mezquita-Catedral",
  "Alcázar de los Reyes Cristianos",
  "Madinat al-Zahra (Medina Azahara)",
  "Palacio de Viana",
];

for (let i = 0; i < radio1.length; i++) {
  let label3 = document.createElement("label");
  label3.textContent = " " + radio2[i];
  let rad2 = document.createElement("input");
  rad2.setAttribute("type", "radio");
  rad2.setAttribute("name", "monumentoFav"); //Para que solo se pueda seleccionar uno se coloca el mismo atributo name
  contenedor.appendChild(rad2);
  contenedor.appendChild(label3);
  contenedor.appendChild(document.createElement("br"));
}

//Titulo para requisito de checkbox
contenedor.appendChild(document.createElement("br")); //Espacio
let checkBoxes = document.createElement("h2");
checkBoxes.textContent =
  "¿No te ha gustado tu visita a Córdoba? Señala el/los motivo/s";
contenedor.appendChild(checkBoxes);

//Añadimos 5 checkbox diferentes
let opcionesCheck = [
  "Porque tiene la mejor gastronomía de España",
  "Porque no hay ciudad con mayor valor cultural que Córdoba",
  "Porque los cordobeses son muy apañaos",
  "Porque es bonita la mires desde donde la mires",
  "No he disfrutado en Córdoba porque mi gusto está claramente atrofiado",
];

for (let i = 0; i < opcionesCheck.length; i++) {
  let label4 = document.createElement("label");
  label4.textContent = " " + opcionesCheck[i];
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  contenedor.appendChild(checkBox);
  contenedor.appendChild(label4);
  contenedor.appendChild(document.createElement("br"));
}


//Añadimos un textArea


