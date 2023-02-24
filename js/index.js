$('.nav__toggle-icon').click(function () {
    "use strict";
    $('nav ul').slideToggle();
});



$(window).resize(function () {
    "use strict";
    if ($(window).width() > 780) {
        $('nav ul').removeAttr('style');
    }
});

function clock() {
    const today = new Date();
    let h = toTwoDigits(today.getHours());
    let m = toTwoDigits(today.getMinutes());
    let s = toTwoDigits(today.getSeconds());
    let month = toTwoDigits(today.getMonth() + 1);
    let year = today.getFullYear();
    let day = toTwoDigits(today.getDate());

    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + "  " + day + "-" + month + "-" + year;

    setTimeout(clock, 1000);
}
function toTwoDigits(n) {
    let newString = n;
    if (n < 10) {
        newString = "0" + newString;
    }
    return newString;
}

// Alerta de Carrito
function mostrar() {
    swal("Seguro que deseas agregar al carrito",{
        buttons: ["Si", "No"]
    });
}