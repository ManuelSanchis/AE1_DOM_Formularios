//creacion del <div>
var div = document.createElement("div")
div.id = "contenedor"
document.body.appendChild(div);//meter el div en el body

// creo un elemento "br"
var br = document.createElement("br")

//creo un h1 para el titulo y le agrego un id "titulo1"
var titulo = document.createElement("h1");   
titulo.id = "titulo1"  
var contenido = document.createTextNode("este es el titulo principal de la pagina")//mensaje del titulo

titulo.appendChild(contenido)//meter el contenido en el titulo
div.appendChild(titulo);//meter el titulo en el div

//creamos el formulario
var form = document.createElement("form")
div.appendChild(form)

//creo una tabla
var table = document.createElement("table")
form.appendChild(table)


//tr para DNI
//crear y meter un "tr" en la tabla
var trDni = document.createElement("tr")
table.appendChild(trDni)

//crear y meter un "td" en el "tr"
var tdDni = document.createElement("td")
var tdDniContenido = document.createTextNode("DNI : ")
tdDni.appendChild(tdDniContenido)
trDni.appendChild(tdDni)

//creamos input
var input1 = document.createElement("input")
input1.type = "text"
input1.name = "DNI"
input1.id = "DNI"
tdDni.appendChild(input1)


//tr para NOMBRE
//crear y meter un "tr" en la tabla
var trNombre = document.createElement("tr")
table.appendChild(trNombre)

//crear y meter un "td" en el "tr"
var tdNombre = document.createElement("td")
var tdNombreContenido = document.createTextNode("Nombre : ")
tdNombre.appendChild(tdNombreContenido)
trNombre.appendChild(tdNombre)

//creamos input
var input2 = document.createElement("input")
input2.type = "text"
input2.name = "Nombre"
input2.id = "Nombre"
tdNombre.appendChild(input2)


//tr para APELLIDOS
//crear y meter un "tr" en la tabla
var trApellidos = document.createElement("tr")
table.appendChild(trApellidos)

//crear y meter un "td" en el "tr"
var tdApellidos = document.createElement("td")
var tdApellidosContenido = document.createTextNode("Apellidos : ")
tdApellidos.appendChild(tdApellidosContenido)
trApellidos.appendChild(tdApellidos)

//creamos input
var input3 = document.createElement("input")
input3.type = "text"
input3.name = "Apellidos"
input3.id = "Apellidos"
tdApellidos.appendChild(input3)


//tr para DIRECCION
//crear y meter un "tr" en la tabla
var trDireccion = document.createElement("tr")
table.appendChild(trDireccion)

//crear y meter un "td" en el "tr"
var tdDireccion = document.createElement("td")
var tdDireccionContenido = document.createTextNode("Dirección : ")
tdDireccion.appendChild(tdDireccionContenido)
trDireccion.appendChild(tdDireccion)

//creamos input
var input4 = document.createElement("input")
input4.type = "text"
input4.name = "Direccion"
input4.id = "Direccion"
tdDireccion.appendChild(input4)


//tr para TELEFONO
//crear y meter un "tr" en la tabla
var trTelefono = document.createElement("tr")
table.appendChild(trTelefono)

//crear y meter un "td" en el "tr"
var tdTelefono = document.createElement("td")
var tdTelefonoContenido = document.createTextNode("Teléfono : ")
tdTelefono.appendChild(tdTelefonoContenido)
trTelefono.appendChild(tdTelefono)

//creamos input
var input5 = document.createElement("input")
input5.type = "text"
input5.name = "telefono"
input5.id = "telefono"
tdTelefono.appendChild(input5)
table.appendChild(br)


// crear el RADIO BUTTON de ACCION
var radio1 = document.createElement("input")
radio1.type = "radio"
radio1.name = "select"
radio1.value = "si"


//crear y meter un "tr" en la tabla
var trRadio1 = document.createElement("tr")
table.appendChild(trRadio1)

//crear y meterle al radio Button el nombre
var tdRadio1 = document.createElement("td")
var Radio1Contenido = document.createTextNode("Acción")
table.appendChild(trRadio1)
trRadio1.appendChild(radio1)
trRadio1.appendChild(Radio1Contenido)



// crear el RADIO BUTTON de FANTASIA
var radio2 = document.createElement("input")
radio2.type = "radio"
radio2.name = "fantasia"
radio2.value = "fantasia"


//crear y meter un "tr" en la tabla
var trRadio2 = document.createElement("tr")
table.appendChild(trRadio2)

//crear y meterle al radio Button el nombre
var tdRadio2 = document.createElement("td")
var Radio2Contenido = document.createTextNode("Fantasía")
table.appendChild(trRadio2)
trRadio2.appendChild(radio2)
trRadio2.appendChild(Radio2Contenido)



// crear el RADIO BUTTON de COMEDIA
var inputRadio = document.createElement("input")
var idComedia = document.createElement("id")
inputRadio.type = "radio"
inputRadio.name = "comedia"
inputRadio.value = "comedia"
idComedia.id = "comedia"
inputRadio.appendChild(idComedia)

var labelComedia = document.createElement("label")
labelComedia.for = "comedia"
var contenidoComedia = document.createTextNode("comedia")



//crear y meter un "tr" en la tabla
var trRadio3 = document.createElement("tr")
table.appendChild(trRadio3)

//crear y meterle al radio Button el nombre
var tdRadio3 = document.createElement("td")
var Radio3Contenido = document.createTextNode("Comedia")
table.appendChild(trRadio1)
trRadio3.appendChild(inputRadio)
trRadio3.appendChild(Radio3Contenido)














