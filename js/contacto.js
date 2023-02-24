//Validaciones del formulario contacto//

function validateForm() {
    var verify=true;
    var expRegName = /^([a-z ñáéíóú]{2,60})$/i;  
    var expRegLastname = /^([a-z ñáéíóú]{2,60})$/i;
    var expRegEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    //var formulario=document.getElementById("contacto");
    var name=document.getElementById("name");
    var lastname=document.getElementById("lastname");
    var email=document.getElementById("email");
    var message=document.getElementById("message");

    if (!name.value) {
        alert("El campo nombre es requerido");
        name.focus();
        verify=false;
    }else if(!expRegName.exec(name.value)){
        alert("El campo nombre solo acepta letras y espacios en blanco");
        name.focus();
        verify=false;
    }else if (!lastname.value) {
        alert("El campo apellido es requerido");
        name.focus();
        verify=false;
    }else if(!expRegLastname.exec(lastname.value)){
        alert("El campo apellido solo acepta letras y espacios en blanco");
        lastname.focus();
        verify=false;
    }else if (!email.value){
        alert("El campo correo es requerido");
        email.focus();
        verify=false;
    }else if (!expRegEmail.exec(email.value)){
        alert("El campo correo esta mal escrito");
        email.focus();
        verify=false;
    }else if (!message.value){
        alert("El campo mensaje es requerido");
        message.focus();
        verify=false;
    }
    if(verify){
        alert("Guardado exitosamente");
    }
}

    buttonSend=document.getElementById("send");
    buttonSend.onclick=validateForm;

    

