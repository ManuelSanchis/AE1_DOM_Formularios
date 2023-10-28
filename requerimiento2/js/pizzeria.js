window.onload = function(){

    //variable del id del "form"
    let formulario = document.getElementById("formulario")
    //varible de tamaño
    let pequeña = document.getElementById("pequeña")
    let mediana = document.getElementById("mediana")
    let grande = document.getElementById("grande")
    let totalPrecio = 0

    //creamos los ingredientes
    let queso = document.getElementById("queso")
    let pechuga = document.getElementById("pechuga")
    let piña = document.getElementById("piña")
    let tomate = document.getElementById("tomate")

    //Array para los ingredientes
    let ingrArray = [queso, pechuga, piña, tomate]
    //validacion para los imput de tipo "text"
    let boton = document.getElementById("botonProcesar");

    //variable "id" de inputs
    let nombre = document.getElementById("nombre");
    let direccion = document.getElementById("direccion");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    
    let alerta =document.getElementById("alerta");
    let correcto = document.getElementById("correcto");

    let tamaño = document.getElementsByName("tamaño");
    let seleccionadoT = false;

    let ingrediente = document.getElementsByName("ingrediente");
    var seleccionadoI = false;


    function validacion(){
        
        if(nombre.value.trim() == "" || direccion.value.trim() == "" || telefono.value.trim() == "" || email.value.trim() == ""){
            alerta.style.display = "block";
            return false;
        }else{
            alerta.style.display = "none";

        }

        //validacion para el radio button para el tamaño de la pizza
        for(var i=0; i < tamaño.length; i++){
            if(tamaño[i].checked){
                seleccionadoT = true;
                break;
            }
        }
        if(!seleccionadoT){
            alerta.style.display="block";
            return false;
        }else{
            alerta.style.display="none";

        }
        
        //validacion para los checkbox de los ingredientes
        for(var i=0; i < ingrediente.length; i++){
            if(ingrediente[i].checked){
                seleccionadoI = true;
                break;
            }
        }
        if(!seleccionadoI){
            alerta.style.display="block";
            return false;
        }else{
            alerta.style.display="none";
            return true;
        }
    } 

    function precio(){
        if (pequeña.checked){
            totalPrecio = 5;
        }else{
            if(mediana.checked){
                totalPrecio = 10
            }else{
                if(grande.checked){
                    totalPrecio = 15
                }
            }
        }
        for (let i = 0; i < ingrArray.length; i++){
            if(ingrArray[i].checked){
                totalPrecio +=1
            }
        }
        totalPrecio += "€"
        alert(`El total del pedido es : ${totalPrecio}`) 
    }
    
    formulario.onsubmit = validacion;
    boton.onclick = function(){
        if(validacion()){
            precio()
        }
    }
}