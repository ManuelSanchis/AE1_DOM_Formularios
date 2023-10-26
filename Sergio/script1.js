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
  label.textContent = (campos[i] + ": "); //Introducimos el valor de cada label segun el índice
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Introduzca su " + campos[i]);//Usamos el índice para colocar un placeholder en cada input
  contenedor.appendChild(label);
  contenedor.appendChild(input);
  contenedor.appendChild(document.createElement("br"));
}


