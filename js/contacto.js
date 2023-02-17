//variables
/*
const nombre = document.querySelector('#nombre');

console.log(nombre);

nombre.addEventListener('click', ()=>{

    nombre.classList.add('form__input--color');

});*/

function validarForm() {
    var verificar=true;
    var expRegNombre = /^([a-z ñáéíóú]{2,60})$/i;
    var expRegCorreo = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    //var formulario=document.getElementById("contacto");
    var nombre=document.getElementById("nombre");
    var correo=document.getElementById("correo");
    var mensaje=document.getElementById("mensaje");

    if (!nombre.value) {
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar=false;
    }else if(!expRegNombre.exec(nombre.value)){
        alert("El campo nombre solo acepta letras y espacios en blanco")
        nombre.focus();
        vereficar=false;
    }else if (!correo.value){
        alert("El campo correo es requerido");
        correo.focus();
        verificar=false;
    }else if (!expRegCorreo.exec(correo.value)){
        alert("El campo correo esta mal escrito");
        correo.focus();
        verificar=false;
    }else if (!mensaje.value){
        alert("El campo mensaje es requerido");
        mensaje.focus();
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

    botonEnviar=document.getElementById("enviar");
    console.log(botonEnviar);
    botonEnviar.onclick=validarForm;

}