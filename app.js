const switchBoton = document.getElementById("cambio")
switchBoton.setAttribute("value","Encriptar -> Descencriptar")

switchBoton.addEventListener("click", function () {
    switch(switchBoton.getAttribute("value")){
        case "Encriptar -> Descencriptar": switchBoton.setAttribute("value","Desencriptar -> Encriptar"); break;
        case "Desencriptar -> Encriptar": switchBoton.setAttribute("value","Encriptar -> Descencriptar"); break;
    }
    console.log(switchBoton.getAttribute("value"));

});






