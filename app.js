switchBoton = document.getElementById("cambio");
switchBoton.setAttribute("value","Encriptar -> Descencriptar");
switchBoton.addEventListener("click", function () {
    if(switchBoton == "Encriptar -> Descencriptar"){
        switchBoton.setAttribute("value","Descencriptar -> Encriptar");
    }
    else{ switchBoton.setAttribute("value","Encriptar -> Descencriptar");
}
});

console.log(switchBoton);




