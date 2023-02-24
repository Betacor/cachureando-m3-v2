// Validación de Formulario de quiero vender
function validateForm() {
    var verify = true;
    var expRegEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;

    var form = document.getElementById("form-selling");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var sell = document.getElementById("sell");
    var size = document.getElementById("size");
    var upload = document.getElementById("upload-img");

    if (!email.value) {
        alert("El campo email es requerido");
        email.focus();
        verify = false;
    } else if (!expRegEmail.exec(email.value)) {
        alert("El campo email esta mal escrito");
        email.focus();
        verify = false;
    } else if (!password.value) {
        alert("El campo contraseña es requerido");
        password.focus();
        verify = false;
    } else if (!sell.value) {
        alert("El campo que vendes es requerido");
        sell.focus();
        verify = false;
    } else if (!sell.value) {
        alert("El campo quiero vender esta mal escrito");
        sell.focus();
        verify = false;
    } else if (!size.value) {
        alert("El campo que talla es requerido");
        size.focus();
        verify = false;
    } else if (!upload.value) {
        alert("El campo sube una imagen es requerido");
        upload.focus();
        verify = false;
    }
    if (verify) {
        alert("Guardado exitosamente");
    }
} 

    buttonSend = document.getElementById("send");
    buttonSend.onclick = validateForm;



