// FORMULARIO
let form = document.createElement("form");
form.id = "form1";
form.action = "urlServidor";
form.method = "get";

// TABLA
let table = document.createElement("table");

// DNI
let trDni = document.createElement("tr"); // Crea el elemento trDni

let tdDni = document.createElement("td"); // Crea el elemento tdDni
tdDni.id = "tdDni";
let contenidoDni = document.createTextNode("DNI:"); // Crea el contenido del elemento tdDni
tdDni.appendChild(contenidoDni); // Introduce el elemento contenidoDni en tdDni

let tdDniInput = document.createElement("td"); // Crea el elemento tdDniInput
tdDniInput.id = "tdDniInput";

let inputDni = document.createElement("input"); // Crea el elemento inputDni
inputDni.id = "inputDni";
inputDni.name = "dni";
inputDni.type = "text";
tdDniInput.appendChild(inputDni); // Introduce el elemento inputDni en tdDniInput

trDni.appendChild(tdDni); // Introduce el elemento tdDni en trDni
trDni.appendChild(tdDniInput); // Introduce el elemento tdDniInput en trDni

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
let trRadiobutton = document.createElement("tr"); // Crea el elemento trRadiobutton

let tdContenidoRadiobutton = document.createElement("td"); // Crea el elemento tdContenidoRadiobutton
tdContenidoRadiobutton.id = "tdContenidoRadiobutton";
let contenidoRadiobutton = document.createTextNode("Radio Button"); // Crea el contenido del elemento tdContenidoRadiobutton
tdContenidoRadiobutton.appendChild(contenidoRadiobutton); // Introduce el elememento contenidoRadiobutton en tdContenidoRadiobutton

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
let trCheckbox = document.createElement("tr"); // Crea el elemento trCheckbox

let tdContenidoCheckbox = document.createElement("td"); // Crea el elemento tdContenidoCheckbox
tdContenidoCheckbox.id = "tdContenidoCheckbox";
let contenidoCheckbox = document.createTextNode("Checkbox"); // Crea el contenido del elemento tdContenidoCheckbox
tdContenidoCheckbox.appendChild(contenidoCheckbox); // Introduce el elememento contenidoCheckbox en tdContenidoCheckbox

trCheckbox.appendChild(tdContenidoCheckbox); // Introduce el elemento tdContenidoCheckbox en trCheckbox

// checkbox1
let checkbox1Input = document.createElement("input"); // Crea el elemento checkbox1Input
checkbox1Input.id = "checkbox1Input";
checkbox1Input.type = "checkbox";
checkbox1Input.value = "checkbox1Input";

let checkbox1Label = document.createElement("label"); // Crea el elemento checkbox1Label
let labelCheckbox1 = document.createTextNode("Checkbox 1"); // Crea el contenido del elemento checkbox1Label
checkbox1Label.appendChild(labelCheckbox1); // Introduce el elemento labelCheckbox1 em checkbox1Label

trCheckbox.appendChild(checkbox1Input); // Introduce el elemento checkbox1Input en trCheckbox
trCheckbox.appendChild(checkbox1Label); // Introduce el elemento checkbox1Label en trCheckbox

// checkbox2
let checkbox2Input = document.createElement("input"); // Crea el elemento checkbox2Input
checkbox2Input.id = "checkbox2Input";
checkbox2Input.type = "checkbox";
checkbox2Input.value = "checkbox2Input";

let checkbox2Label = document.createElement("label"); // Crea el elemento checkbox2Label
let labelCheckbox2 = document.createTextNode("Checkbox 2"); // Crea el contenido del elemento checkbox2Label
checkbox2Label.appendChild(labelCheckbox2); // Introduce el elemento labelCheckbox2 em checkbox2Label

trCheckbox.appendChild(checkbox2Input); // Introduce el elemento checkbox2Input en trCheckbox
trCheckbox.appendChild(checkbox2Label); // Introduce el elemento checkbox2Label en trCheckbox

// IMAGENES
// imagen1
let trImg1 = document.createElement("tr"); // Crea el elemento trImg1

let tdContenidoImg1 = document.createElement("td"); // Crea el elemento tdContenidoImg1
tdContenidoImg1.id = "tdContenidoImg1";
let contenidoImg1 = document.createTextNode("Imagen 1:"); // Crea el contenido del elemento tdContenidoImg1
tdContenidoImg1.appendChild(contenidoImg1); // Introduce el elememento contenidoImg1 en tdContenidoImg1

trImg1.appendChild(tdContenidoImg1); // Introduce el elemento tdContenidoImg1 en trImg1

let tdImg1 = document.createElement("td");
let img1 = document.createElement("img");
img1.src = "/ae1_1/img/img1.jpg";

tdImg1.appendChild(img1);
trImg1.appendChild(tdImg1);

// imagen2
let trImg2 = document.createElement("tr"); // Crea el elemento trImg2

let tdContenidoImg2 = document.createElement("td"); // Crea el elemento tdContenidoImg2
tdContenidoImg2.id = "tdContenidoImg2";
let contenidoImg2 = document.createTextNode("Imagen 2:"); // Crea el contenido del elemento tdContenidoImg2
tdContenidoImg2.appendChild(contenidoImg1); // Introduce el elememento contenidoImg1 en tdContenidoImg2

trImg1.appendChild(tdContenidoImg1); // Introduce el elemento tdContenidoImg2 en trImg2
let tdImg2 = document.createElement("td");
let img2 = document.createElement("img");
img2.src = "/ae1_1/img/img2.jpg";

tdImg2.appendChild(img2);
trImg2.appendChild(tdImg2);

// SELECT
let trSelect = document.createElement("tr"); // Crea el elemento trSelect

let tdContenidoSelect = document.createElement("td"); // Crea el elemento tdContenidoSelect
tdContenidoSelect.id = "tdContenidoSelect";
let contenidoSelect = document.createTextNode("Select:"); // Crea el contenido del elemento tdContenidoSelect
tdContenidoSelect.appendChild(contenidoSelect); // Introduce el elemento contenidoSelect en tdContenidoSelect

trSelect.appendChild(tdContenidoSelect); // Introduce el elemento tdContenidoSelect en trSelect

let select = document.createElement("select"); // Crea el elemento select

// option1
let option1 = document.createElement("option"); // Crea el elemento option1
let option1Texto = document.createTextNode("opcion 1"); // Crea elcontenido del elemento option1
option1.appendChild(option1Texto); // Introduce el elemento option1Texto en option1

// option2
let option2 = document.createElement("option"); // Crea el elemento option2
let option2Texto = document.createTextNode("opcion 2"); // Crea elcontenido del elemento option2
option2.appendChild(option2Texto); // Introduce el elemento option1Texto en option2

// option3
let option3 = document.createElement("option"); // Crea el elemento option3
let option3Texto = document.createTextNode("opcion 3"); // Crea elcontenido del elemento option3
option3.appendChild(option3Texto); // Introduce el elemento option1Texto en option3

select.appendChild(option1); // Introduce el elemento option1 en select
select.appendChild(option2); // Introduce el elemento option2 en select
select.appendChild(option3); // Introduce el elemento option3 en select

trSelect.appendChild(select); // Introduce el elemento select en trSelect

// TEXT AREA
let trTextArea = document.createElement("tr"); // Crea el elemento trTextArea

let tdContenidoTextArea = document.createElement("td"); // Crea el elemento tdContenidoTextArea
tdContenidoTextArea.id = "tdTexCon";
let contenidoTextArea = document.createTextNode("Text Area:"); // Crea el contenido del elemento tdContenidoTextArea
tdContenidoTextArea.appendChild(contenidoTextArea); // Introduce el elemento contenidoTextArea en tdContenidoTextArea

let tdTextArea = document.createElement("td"); // Crea el elemento tdTextArea
tdTextArea.id = "tdTextArea";

let textArea = document.createElement("textarea"); // Crea el elemento textArea
textArea.id = "textArea";
textArea.name = "textArea";
tdTextArea.appendChild(textArea); // Introduce el elemento textArea en tdTextArea

trTextArea.appendChild(tdContenidoTextArea); // Introduce el elemento tdContenidoTextArea en trTextArea
trTextArea.appendChild(tdTextArea); // Introduce el elemento tdTextArea en trTextArea

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
