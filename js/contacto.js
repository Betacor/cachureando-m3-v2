//variables
/*
const nombre = document.querySelector('#nombre');

console.log(nombre);

nombre.addEventListener('click', ()=>{

    nombre.classList.add('form__input--color');

});*/

function validarForm() {
    var verificar=true;
    var expRegName = /^([a-z ñáéíóú]{2,60})$/i;
    var expRegEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    //var formulario=document.getElementById("contacto");
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var message=document.getElementById("message");

    if (!name.value) {
        alert("El campo nombre es requerido");
        name.focus();
        verificar=false;
    }else if(!expRegName.exec(name.value)){
        alert("El campo nombre solo acepta letras y espacios en blanco")
        name.focus();
        vereficar=false;
    }else if (!email.value){
        alert("El campo correo es requerido");
        email.focus();
        verificar=false;
    }else if (!expRegEmail.exec(email.value)){
        alert("El campo correo esta mal escrito");
        email.focus();
        verificar=false;
    }else if (!message.value){
        alert("El campo mensaje es requerido");
        message.focus();
        verificar=false;
    }
    if(verificar){
        alert("Se ha enviado el formulario");
    }
}

function limpiarForm(){
    document.getElementById("contacto").reset();
}

window.onload=function(){
    var botonEnviar,botonLimpiar;

    /*botonLimpiar=document.getElementById("limpiar");
    botonLimpiar.onclick=limpiarForm;*/

    botonEnviar=document.getElementById("send");
    console.log(botonEnviar);
    botonEnviar.onclick=validarForm;

}