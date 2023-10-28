// FORMULARIO
let form = document.createElement("form");
form.id = "form1";
form.action = "urlServidor";
form.method = "get";

// TABLA
let table = document.createElement("table");

// DNI
let trDni = document.createElement("tr"); 

let tdDni = document.createElement("td"); 
tdDni.id = "tdDni";
let contenidoDni = document.createTextNode("DNI:"); 
tdDni.appendChild(contenidoDni); 

let tdDniInput = document.createElement("td"); 
tdDniInput.id = "tdDniInput";

let inputDni = document.createElement("input"); 
inputDni.id = "inputDni";
inputDni.name = "dni";
inputDni.type = "text";
tdDniInput.appendChild(inputDni); 

trDni.appendChild(tdDni); 
trDni.appendChild(tdDniInput); 

// NOMBRE
let trNombre = document.createElement("tr");

let tdNombre = document.createElement("td");
tdNombre.id = "tdNombre";
let contenidoNombre = document.createTextNode("Nombre:");
tdNombre.appendChild(contenidoNombre);

let tdNombreInput = document.createElement("td");
tdNombreInput.id = "tdNombreInput";

let inputNombre = document.createElement("input");
inputNombre.id = "inputNombre";
inputNombre.name = "nombre";
inputNombre.type = "text";
tdNombreInput.appendChild(inputNombre);

trNombre.appendChild(tdNombre);
trNombre.appendChild(tdNombreInput);

// APELLIDOS
let trApellido = document.createElement("tr");

let tdApellido = document.createElement("td");
tdApellido.id = "tdApellido";
let contenidoApellido = document.createTextNode("Apellidos:");
tdApellido.appendChild(contenidoApellido);

let tdApellidoInput = document.createElement("td");
tdApellidoInput.id = "tdApellidoInput";

let inputApellido = document.createElement("input");
inputApellido.id = "inputApellido";
inputApellido.name = "apellidos";
inputApellido.type = "text";
tdApellidoInput.appendChild(inputApellido);

trApellido.appendChild(tdApellido);
trApellido.appendChild(tdApellidoInput);

// DIRECCION
let trDireccion = document.createElement("tr");

let tdDireccion = document.createElement("td");
tdDireccion.id = "tdDireccion";
let contenidoDireccion = document.createTextNode("Dirección:");
tdDireccion.appendChild(contenidoDireccion);

let tdDireccionInput = document.createElement("td");
tdDireccionInput.id = "tdDireccionInput";

let inputDireccion = document.createElement("input");
inputDireccion.id = "inputDireccion";
inputDireccion.name = "direccion";
inputDireccion.type = "text";
tdDireccionInput.appendChild(inputDireccion);

trDireccion.appendChild(tdDireccion);
trDireccion.appendChild(tdDireccionInput);

// TELEFONO
let trTelefono = document.createElement("tr");

let tdTelefono = document.createElement("td");
tdTelefono.id = "tdTelefono";
let contenidoTelefono = document.createTextNode("Teléfono:");
tdTelefono.appendChild(contenidoTelefono);

let tdTelefonoInput = document.createElement("td");
tdTelefonoInput.id = "tdTelefonoInput";

let inputTelefono = document.createElement("input");
inputTelefono.id = "inputTelefono";
inputTelefono.name = "telefono";
inputTelefono.type = "text";
tdTelefonoInput.appendChild(inputTelefono);

trTelefono.appendChild(tdTelefono);
trTelefono.appendChild(tdTelefonoInput);

// RADIO BUTTON
let trRadiobutton = document.createElement("tr"); 
let tdContenidoRadiobutton = document.createElement("td"); 
tdContenidoRadiobutton.id = "tdContenidoRadiobutton";
let contenidoRadiobutton = document.createTextNode("Radio Button"); 
tdContenidoRadiobutton.appendChild(contenidoRadiobutton); 

trRadiobutton.appendChild(tdContenidoRadiobutton);

// radiobutton1
var radiobutton1Input = document.createElement("input");
radiobutton1Input.id = "radiobutton1";
radiobutton1Input.type = "radio";

let radiobutton1Label = document.createElement("label");
let labelRadiobutton1 = document.createTextNode("Radio Button 1");
radiobutton1Label.appendChild(labelRadiobutton1);

trRadiobutton.appendChild(radiobutton1Input);
trRadiobutton.appendChild(radiobutton1Label);

// radiobutton2
var radiobutton2Input = document.createElement("input");
radiobutton2Input.id = "radiobutton2";
radiobutton2Input.type = "radio";

let radiobutton2Label = document.createElement("label");
let labelRadiobutton2 = document.createTextNode("Radio Button 2");
radiobutton2Label.appendChild(labelRadiobutton2);

trRadiobutton.appendChild(radiobutton2Input);
trRadiobutton.appendChild(radiobutton2Label);

// CHECK BOX
let trCheckbox = document.createElement("tr"); 

let tdContenidoCheckbox = document.createElement("td"); 
tdContenidoCheckbox.id = "tdContenidoCheckbox";
let contenidoCheckbox = document.createTextNode("Checkbox"); 
tdContenidoCheckbox.appendChild(contenidoCheckbox); 

trCheckbox.appendChild(tdContenidoCheckbox); 

// checkbox1
let checkbox1Input = document.createElement("input"); 
checkbox1Input.id = "checkbox1Input";
checkbox1Input.type = "checkbox";
checkbox1Input.value = "checkbox1Input";

let checkbox1Label = document.createElement("label"); 
let labelCheckbox1 = document.createTextNode("Checkbox 1"); 
checkbox1Label.appendChild(labelCheckbox1); 

trCheckbox.appendChild(checkbox1Input); 
trCheckbox.appendChild(checkbox1Label); 

// checkbox2
let checkbox2Input = document.createElement("input"); 
checkbox2Input.id = "checkbox2Input";
checkbox2Input.type = "checkbox";
checkbox2Input.value = "checkbox2Input";

let checkbox2Label = document.createElement("label"); 
let labelCheckbox2 = document.createTextNode("Checkbox 2"); 
checkbox2Label.appendChild(labelCheckbox2); 

trCheckbox.appendChild(checkbox2Input); 
trCheckbox.appendChild(checkbox2Label); 

// IMAGENES
// imagen1
let trImg1 = document.createElement("tr"); 

let tdContenidoImg1 = document.createElement("td"); 
tdContenidoImg1.id = "tdContenidoImg1";
let contenidoImg1 = document.createTextNode("Imagen 1:"); 
tdContenidoImg1.appendChild(contenidoImg1); 

trImg1.appendChild(tdContenidoImg1); 

let tdImg1 = document.createElement("td");
let img1 = document.createElement("img");
img1.src = "/ae1_1/img/img1.jpg";

tdImg1.appendChild(img1);
trImg1.appendChild(tdImg1);

// imagen2
let trImg2 = document.createElement("tr"); 

let tdContenidoImg2 = document.createElement("td"); 
tdContenidoImg2.id = "tdContenidoImg2";
let contenidoImg2 = document.createTextNode("Imagen 2:"); 
tdContenidoImg2.appendChild(contenidoImg1); 

trImg1.appendChild(tdContenidoImg1); 
let tdImg2 = document.createElement("td");
let img2 = document.createElement("img");
img2.src = "/ae1_1/img/img2.jpg";

tdImg2.appendChild(img2);
trImg2.appendChild(tdImg2);

// SELECT
let trSelect = document.createElement("tr"); 

let tdContenidoSelect = document.createElement("td"); 
tdContenidoSelect.id = "tdContenidoSelect";
let contenidoSelect = document.createTextNode("Select:"); 
tdContenidoSelect.appendChild(contenidoSelect); 

trSelect.appendChild(tdContenidoSelect); 

let select = document.createElement("select"); 

// option1
let option1 = document.createElement("option"); 
let option1Texto = document.createTextNode("opcion 1"); 
option1.appendChild(option1Texto); 

// option2
let option2 = document.createElement("option"); 
let option2Texto = document.createTextNode("opcion 2"); 
option2.appendChild(option2Texto); 

// option3
let option3 = document.createElement("option"); 
let option3Texto = document.createTextNode("opcion 3"); 
option3.appendChild(option3Texto); 

select.appendChild(option1); 
select.appendChild(option2); 
select.appendChild(option3); 

trSelect.appendChild(select); 

// TEXT AREA
let trTextArea = document.createElement("tr"); 

let tdContenidoTextArea = document.createElement("td"); 
tdContenidoTextArea.id = "tdTexCon";
let contenidoTextArea = document.createTextNode("Text Area:"); 
tdContenidoTextArea.appendChild(contenidoTextArea); 

let tdTextArea = document.createElement("td"); 
tdTextArea.id = "tdTextArea";

let textArea = document.createElement("textarea"); 
textArea.id = "textArea";
textArea.name = "textArea";
tdTextArea.appendChild(textArea); 

trTextArea.appendChild(tdContenidoTextArea); 
trTextArea.appendChild(tdTextArea); 

table.appendChild(trDni); // Introduce el elemento trDni en table
table.appendChild(trNombre); // Introduce el elemento trNombre en table
table.appendChild(trApellido); // Introduce el elemento trApellido en table
table.appendChild(trDireccion); // Introduce el elemento trDireccion en table
table.appendChild(trTelefono); // Introduce el elemento trTelefono en table
table.appendChild(trRadiobutton); // Introduce el elemento trRadiobutton
table.appendChild(trCheckbox); // Introduce el elemento trCheckbox en table
table.appendChild(trImg1); // Introduce el elemento trImg1
table.appendChild(trImg2); // Introduce el elemento trImg2
table.appendChild(trSelect); // Introduce el elemento trSelect en table
table.appendChild(trTextArea); // Introduce el elemento trTextArea en table

form.appendChild(table); // Introduce el elemento table en form

div1.appendChild(form); // Introduce el elemento form en div1
