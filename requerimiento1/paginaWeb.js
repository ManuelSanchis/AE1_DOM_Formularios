//creacion del <div>
var div = document.createElement("div")
div.id = "contenedor"
document.body.appendChild(div);//meter el div en el body

// creo un elemento "br"
var br = document.createElement("br")

//creo un h1 para el titulo y le agrego un id "titulo1"
var titulo = document.createElement("h1");   
titulo.id = "titulo1"  
var contenido = document.createTextNode("Página de registro de NetFlux")//mensaje del titulo

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


//
//Creamos un el label para tipo de pago
var labelPago = document.createElement("label")
labelPago.for = "pago"
table.appendChild(labelPago)
labelPagoContenido = document.createTextNode("Tipo de pago : ")
labelPago.appendChild(labelPagoContenido)

//Creamos el select
var selectPago = document.createElement("select")
selectPago.name = "pago"
selectPago.id = "pago"
table.appendChild(selectPago)

//creamos "option1" para el select de "pago"
var option1 = document.createElement("option")
option1.value = "0"
var option1Contenido = document.createTextNode("Elige una opción")
selectPago.appendChild(option1)
option1.appendChild(option1Contenido)

//creamos "option2" para el select de pago
var option2 = document.createElement("option")
option2.value = "1"
var option2Contenido = document.createTextNode("Tarjeta")
selectPago.appendChild(option2)
option2.appendChild(option2Contenido)

//creamos "option3" para el select de pago
var option3 = document.createElement("option")
option3.value = "2"
var option3Contenido = document.createTextNode("Bizum")
selectPago.appendChild(option3)
option3.appendChild(option3Contenido)

//creamos "option4" para el select de pago
var option4 = document.createElement("option")
option4.value = "3"
var option4Contenido = document.createTextNode("Transferencia bancaria")
selectPago.appendChild(option4)
option4.appendChild(option4Contenido)

//Creacion de la imagen 1
var img = document.createElement("img")
img.class ="fondo"
img.src ="img/visa.png"
img.style ="width:70px"
div.appendChild(img)

//Creacion de la imagen 2
var img = document.createElement("img")
img.class ="fondo"
img.src ="img/bizum.png"
img.style ="width:100px"
div.appendChild(img)

//Creacion de una tercera imagen para que tenga sentido
var img = document.createElement("img")
img.class ="fondo"
img.src ="img/transferencia.jpg"
img.style ="width:80px"
div.appendChild(img)

// creamos una linea para separar 
var hr = document.createElement("hr")
div.appendChild(hr)

//Creamos "h3" para preguntar que tipo de peliculas prefieren mas
var h3Pregunta = document.createElement("h3")
div.appendChild(h3Pregunta)
var h3PreguntaContenido = document.createTextNode("¿Cual es tu género de películas o series favorito?")
h3Pregunta.appendChild(h3PreguntaContenido)

// creamos otra tabla para los "button" td 
var tableButton = document.createElement("table")
div.appendChild(tableButton)

//
//ahora creamos el "td" y el "tr"
var tdButton = document.createElement("td")
tableButton.appendChild(tdButton)
var trButton = document.createElement("tr")
tdButton.appendChild(trButton)


//
//crear input y label de "accion"
var inputAccion = document.createElement("input")
inputAccion.type = "radio"
inputAccion.name = "genero"
inputAccion.id = "accion"
var labelAccion = document.createElement("label")
labelAccion.id = "accion"
var contenidoAccion = document.createTextNode("Acción")
trButton.appendChild(inputAccion)
trButton.appendChild(labelAccion)
labelAccion.appendChild(contenidoAccion)


//
//Crear input y label de "fantasia"
var inputFantasia = document.createElement("input")
inputFantasia.type = "radio"
inputFantasia.name = "genero"
inputFantasia.id = "fantasia"
var labelFantasia = document.createElement("label")
labelFantasia.id = "fantasia"
var contenidoFantasia = document.createTextNode("Fantasía")
trButton.appendChild(inputFantasia)
trButton.appendChild(labelFantasia)
labelFantasia.appendChild(contenidoFantasia)


//
//Crear input y label de "comedia"
var inputComedia = document.createElement("input")
inputComedia.type = "radio"
inputComedia.name = "genero"
inputComedia.id = "comedia"
var labelComedia = document.createElement("label")
labelComedia.id = "comedia"
var contenidoComedia = document.createTextNode("Comedia")
trButton.appendChild(inputComedia)
trButton.appendChild(labelComedia)
labelComedia.appendChild(contenidoComedia)


//
//Crear input y label de "miedo"
var inputMiedo = document.createElement("input")
inputMiedo.type = "radio"
inputMiedo.name = "genero"
inputMiedo.id = "miedo"
var labelMiedo = document.createElement("label")
labelMiedo.id = "miedo"
var contenidoMiedo = document.createTextNode("Miedo")
trButton.appendChild(inputMiedo)
trButton.appendChild(labelMiedo)
labelMiedo.appendChild(contenidoMiedo)



//Creamos "h3" para preguntar el idioma
var h3Pregunta2 = document.createElement("h3")
div.appendChild(h3Pregunta2)
var h3PreguntaContenido2 = document.createTextNode("¿Cuando ves una serie o una película en que idioma suele ser?")
h3Pregunta2.appendChild(h3PreguntaContenido2)


//Creamos otra tabla
var tableIdioma = document.createElement("table")
div.appendChild(tableIdioma)


// creamos un tr y td para el siguiente "radio button"
var tdIdioma = document.createElement("td")
tableIdioma.appendChild(tdIdioma)
var trIdioma = document.createElement("tr")
tdIdioma.appendChild(trIdioma)


//
//Crear input y label de "euskera"
var inputEuskera = document.createElement("input")
inputEuskera.type = "radio"
inputEuskera.name = "idioma"
inputEuskera.id = "euskera"
var labelEuskera = document.createElement("label")
labelEuskera.id = "euskera"
var contenidoEuskera = document.createTextNode("Euskera")
trIdioma.appendChild(inputEuskera)
trIdioma.appendChild(labelEuskera)
labelEuskera.appendChild(contenidoEuskera)


//
//Crear input y label de "español"
var inputEspañol = document.createElement("input")
inputEspañol.type = "radio"
inputEspañol.name = "idioma"
inputEspañol.id = "español"
var labelEspañol = document.createElement("label")
labelEspañol.id = "español"
var contenidoEspañol = document.createTextNode("Español")
trIdioma.appendChild(inputEspañol)
trIdioma.appendChild(labelEspañol)
labelEspañol.appendChild(contenidoEspañol)


//
//Crear input y label de "ingles"
var inputIngles = document.createElement("input")
inputIngles.type = "radio"
inputIngles.name = "idioma"
inputIngles.id = "ingles"
var labelIngles = document.createElement("label")
labelIngles.id = "Ingles"
var contenidoIngles = document.createTextNode("Ingles")
trIdioma.appendChild(inputIngles)
trIdioma.appendChild(labelIngles)
labelIngles.appendChild(contenidoIngles)


//
//Crear input y label de "otro"
var inputOtro = document.createElement("input")
inputOtro.type = "radio"
inputOtro.name = "idioma"
inputOtro.id = "otro"
var labelOtro = document.createElement("label")
labelOtro.id = "otro"
var contenidoOtro = document.createTextNode("Otro")
trIdioma.appendChild(inputOtro)
trIdioma.appendChild(labelOtro)
labelOtro.appendChild(contenidoOtro)


// creamos una linea para separar 
var hr = document.createElement("hr")
div.appendChild(hr)


//Creamos "h3" para preguntar tipo de dispositivo
var h3Pregunta3 = document.createElement("h3")
div.appendChild(h3Pregunta3)
var h3PreguntaContenido3 = document.createTextNode("¿Que dispositivos sueles usar mas a menudo para reproducir películas y series?")
h3Pregunta3.appendChild(h3PreguntaContenido3)

//Creamos otra tabla para los checkbox
var tableCheckbox = document.createElement("table")
div.appendChild(tableCheckbox)

// creamos un tr y td para los "checkbox"
var tdCheckbox = document.createElement("td")
tableCheckbox.appendChild(tdCheckbox)
var trCheckbox = document.createElement("tr")
tdCheckbox.appendChild(trCheckbox)

//
//Crear input y label de "telefono"
var inputTelefono = document.createElement("input")
inputTelefono.type = "checkbox"
inputTelefono.name = "tipo"
inputTelefono.id = "telefono"
var labelTelefono = document.createElement("label")
labelTelefono.id = "telefono"
var contenidoTelefono = document.createTextNode("Telefono")
trCheckbox.appendChild(inputTelefono)
trCheckbox.appendChild(labelTelefono)
labelTelefono.appendChild(contenidoTelefono)


//
//Crear input y label de "tablet"
var inputTablet = document.createElement("input")
inputTablet.type = "checkbox"
inputTablet.name = "tipo"
inputTablet.id = "tablet"
var labelTablet = document.createElement("label")
labelTablet.id = "tablet"
var contenidoTablet = document.createTextNode("Tablet")
trCheckbox.appendChild(inputTablet)
trCheckbox.appendChild(labelTablet)
labelTablet.appendChild(contenidoTablet)
                                                                        

//
//Crear input y label de "ordenador"
var inputOrdenador = document.createElement("input")
inputOrdenador.type = "checkbox"
inputOrdenador.name = "tipo"
inputOrdenador.id = "ordenador"
var labelOrdenador = document.createElement("label")
labelOrdenador.id = "ordenador"
var contenidoOrdenador = document.createTextNode("Ordenador")
trCheckbox.appendChild(inputOrdenador)
trCheckbox.appendChild(labelOrdenador)
labelOrdenador.appendChild(contenidoOrdenador)


//
//Crear input y label de "television"
var inputTelevision = document.createElement("input")
inputTelevision.type = "checkbox"
inputTelevision.name = "tipo"
inputTelevision.id = "television"
var labelTelevision = document.createElement("label")
labelTelevision.id = "television"
var contenidoTelevision = document.createTextNode("Televisión")
trCheckbox.appendChild(inputTelevision)
trCheckbox.appendChild(labelTelevision)
labelTelevision.appendChild(contenidoTelevision)


//
//Crear input y label de "proyector"
var inputProyector = document.createElement("input")
inputProyector.type = "checkbox"
inputProyector.name = "tipo"
inputProyector.id = "proyector"
var labelProyector = document.createElement("label")
labelProyector.id = "proyector"
var contenidoProyector = document.createTextNode("Proyector")
trCheckbox.appendChild(inputProyector)
trCheckbox.appendChild(labelProyector)
labelProyector.appendChild(contenidoProyector)


// creamos una linea para separar 
var hr = document.createElement("hr")
div.appendChild(hr)

//
//Creamos el label par el "text area"
var labelTextarea = document.createElement("label")
labelTextarea.for = "texto"
div.appendChild(labelTextarea)

//ponemos un "br" para que el textarea aparezca debajo de la pregunta y no al lado
div.appendChild(br)

var labelTextareaContenido = document.createTextNode("¿Le añadirías alguna otra funcionalidad a la aplicación?")
labelTextarea.appendChild(labelTextareaContenido)

//Creamos el textarea
var textarea = document.createElement("textarea")
textarea.name = "texto"
textarea.rows = "7"
textarea.cols = "70"
div.appendChild(textarea)






