//Nos creamos la variable para coger el div del html e insertarle nuestro form
let insertar = document.getElementById("insertar");
let br = document.createElement("br");

//Campos de texto donde poner el DNI, el nombre y los apellidos, la dirección y el teléfono.

let labels = ["DNI", "Nombre", "Apellidos", "Dirección", "Teléfono"];
for (let i = 0; i < labels.length; i++) {
  let br = document.createElement("br");

  //Creamos las etiquetas de cada input
  let label = document.createElement("label");
  let labelText = document.createTextNode(labels[i]);
  label.appendChild(labelText);
  label.style.paddingRight = "10px";

  //Creamos los inputs, uno por cada campo
  let inputFields = document.createElement("input");
  inputFields.type = "text";
  inputFields.name = labels[i];

  insertar.appendChild(label).appendChild(labelText);
  insertar.appendChild(br);
  insertar.appendChild(inputFields);
  insertar.appendChild(br);
}

//Dos radio button, con 4 opciones a elegir

let p = document.createElement("p");
let txt = document.createTextNode("Elige cuál es tu lenguaje favorito: ");
p.appendChild(txt);
insertar.appendChild(p);

//Creamos los valores para los radio buttons
let rbValues = ["Java", "JavaScript", "C++", "Python"];

for (let i = 0; i < rbValues.length; i++) {
  let br = document.createElement("br");

  //Creamos el elemento input de tipo radio, le asignamos un value y un nombre para que formen un grupo de botones, les asignamos un ID diferente
  let rb = document.createElement("input");
  rb.type = "radio";
  rb.value = rbValues[i];
  rb.name = "Programming language";
  rb.id = rbValues[i];

  //Creamos las labels, luego un nodo de texto para cada una y en cada iteración del bucle se le asignaráa un nombre del array rbValues para, finalmente, añadir ese texto al elemento label
  let rbLabels = document.createElement("label");
  let rbLabelTxt = document.createTextNode(rbValues[i]);
  rbLabels.appendChild(rbLabelTxt);

  //lo añadimos como hijos del documento padre
  insertar.appendChild(br);
  insertar.appendChild(rbLabels);
  insertar.appendChild(rb);
}

let p5 = document.createElement("p");
let txt5 = document.createTextNode("¿En qué ciudad alemana vivirías?: ");
p5.appendChild(txt5);
insertar.appendChild(p5);
//Creamos los valores para los radio buttons
let rbValues2 = ["Berlin", "Regensburg", "München", "Frankfurt"];

for (let i = 0; i < rbValues.length; i++) {
  let br = document.createElement("br");

  //Creamos el elemento input de tipo radio, le asignamos un value y un nombre para que formen un grupo de botones, les asignamos un ID diferente
  let rb = document.createElement("input");
  rb.type = "radio";
  rb.value = rbValues2[i];
  rb.name = "Ciudades de Alemania";
  rb.id = rbValues2[i];

  //Creamos las labels, luego un nodo de texto para cada una y en cada iteración del bucle se le asignaráa un nombre del array rbValues para, finalmente, añadir ese texto al elemento label
  let rbLabels = document.createElement("label");
  let rbLabelTxt = document.createTextNode(rbValues2[i]);
  rbLabels.appendChild(rbLabelTxt);

  //lo añadimos como hijos del documento padre
  insertar.appendChild(br);
  insertar.appendChild(rbLabels);
  insertar.appendChild(rb);
}

//Cinco checkbox diferentes

let p2 = document.createElement("p");
let txt2 = document.createTextNode("Elige tu framework favorito: ");
p2.appendChild(txt2);
insertar.appendChild(p2);

for (let i = 0; i < 5; i++) {
  let br = document.createElement("br");

  //Creamos los valores para los check boxes
  let chValues = ["Angular", "React", "Vue", "Astro", "Svelte"];

  //Creamos el elemento input de tipo  checkbox, le asignamos un value y un nombre para que formen un grupo de botones, les asignamos un ID diferente
  let ch = document.createElement("input");
  ch.type = "checkbox";
  ch.value = chValues[i];
  ch.name = "Programming language";
  ch.id = chValues[i];

  //Creamos las labels, luego un nodo de texto para cada una y en cada iteración del bucle se le asignaráa un nombre del array chValues para, finalmente, añadir ese texto al elemento label
  let chLabels = document.createElement("label");
  let chLabelTxt = document.createTextNode(chValues[i]);
  chLabels.appendChild(chLabelTxt);

  //lo añadimos como hijos del documento padre
  insertar.appendChild(br);
  insertar.appendChild(chLabels);
  insertar.appendChild(ch);
  insertar.appendChild(br);
}

//2 imágenes
let images = [
  "https://images.unsplash.com/photo-1691776667966-eb22e1b186d3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697653614090-96801bf66509?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

for (let i = 0; i < images.length; i++) {
  let br = document.createElement("br");
  let img = document.createElement("img");
  img.style.width = "200px";
  img.style.marginTop = "30px";
  img.style.margin = "32px";

  img.src = images[i];
  insertar.appendChild(img);
  insertar.appendChild(br);
}

//Un campo select

let labelSl = document.createElement("label");
let txt3 = document.createTextNode("Elige un coche: ");
labelSl.appendChild(txt3);

insertar.appendChild(labelSl);
let selection = document.createElement("select");
selection.name = "Coches";
insertar.appendChild(selection);

let opTxt = ["Mercedes", "Opel", "Audi", "VolksWagen"];

for (let i = 0; i < opTxt.length; i++) {
  let options = document.createElement("option");
  options.value = opTxt[i];
  let inOption = document.createTextNode(opTxt[i]);

  insertar.appendChild(options);
  selection.appendChild(options).appendChild(inOption);
}

//Un campo textarea
let p3 = document.createElement("p");
let txt4 = document.createTextNode("Escribe algo: ");
p3.appendChild(txt4);
insertar.appendChild(p3);

insertar.appendChild(br);
let textArea = document.createElement("textarea");
textArea.style.height = "150px";
textArea.style.width = "300px";
insertar.appendChild(textArea);
