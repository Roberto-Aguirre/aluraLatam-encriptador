//Elementos del DOM
//Guardo la condicion inicial donde no se tiene nada
const inicialResultado = document.getElementById("area-resultado");
const bloqueResultado = document.getElementById("resultado");
const textoResultado = document.getElementById("texto-resultado")

//Eventlisteners
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");

//Elementos creados

const childResultado  = document.createElement("textarea");
const botonCopiar = document.createElement("button");
//Atributos del boton
botonCopiar.innerText="Copiar";
botonCopiar.setAttribute("class","formato-boton");
botonCopiar.setAttribute("id","copiar");
botonCopiar.setAttribute("onclick","copiarTexto()");
console.log(botonCopiar);
//Atributos del textarea
childResultado.setAttribute("readonly","")


const imagenes = document.querySelectorAll("img");
const imagen = imagenes[2];

//Variables globales
let frase = "";
let fraseArray = [];
let textArea = document.getElementById("texto");
//Objeto con los valores que se van a desencriptar
const desencriptar = {
    e: "enter",
    o: "ober",
    i: "imes",
    a: "ai",
    u: "ufat"
}
//Pasarlos a un array para desarmarlos.
const valores = Object.values(desencriptar);
const llaves = Object.keys(desencriptar);


//Funcion condiciones iniciales
function condicionesVerdaderas() {
        textoResultado.appendChild(childResultado);
        textoResultado.append(botonCopiar);
        textoResultado.hidden=false;
        inicialResultado.hidden = true;
        childResultado.hidden = false;
}

function condicionesIniciales() {
    inicialResultado.hidden = false;
    childResultado.hidden = true;
    textoResultado.hidden = true;
    resizeImagen()
}
condicionesIniciales()

//Funciones principales del DOM
function clickBtnEncriptar() {
    childResultado.value = juntarTexto(encriptarTexto(getTextareaValue()));
    childResultado.value!= ""?condicionesVerdaderas():condicionesIniciales();
    
}

function resizeImagen() {
    var w = window.innerWidth;
    w<=1000?imagen.setAttribute("hidden",""):imagen.toggleAttribute("hidden","");
}

//Obtiene el texto del DOM, del textarea principal donde se escribe.
function getTextareaValue() {
    return textArea.value;
}

//En base a la frase que llega se encripta de la siguiente manera.
function encriptarTexto(frase){
    fraseArray = []
    for (let index = 0; index < frase.length; index++) {
        let letra = frase[index];

        switch (letra) {
            case 'e':
                letra = "enter";
                break;
            case 'i':
                letra = "imes";
                break;
            case 'a':
                letra = "ai";
                break;
            case 'o':
                letra = "ober";
                break;
            case 'u':
                letra = "ufat";
                break;
            default:
                break;
        }
        //Se construye en un array nuevo que va lugar por lugar.
        fraseArray.push(letra);
    }
    return fraseArray;
}   

//Aqui se junta el texto y se envia con el result.
function juntarTexto(fraseArray){
    let resultado = ""
    fraseArray.forEach(element => {resultado += element;});
    return resultado
}

/* FUNCION DE DESCENCRIPTAR */

//Obtiene el texto del textarea y lo envia a la funcion.
function clickBtnDesencriptar() {
    let fraseResultado = textArea.value;
    childResultado.value = TextoResultado(valores,fraseResultado);
    //Si no tiene texto no se mostrara nada
    childResultado.value!= ""? condicionesVerdaderas(): condicionesIniciales();
}

function TextoResultado(valores,fraseResultado) {
    for (let i = 0; i < valores.length; i++) {
    
        fraseResultado = remplazarTexto(fraseResultado,i);
    }
    return fraseResultado    
}

function remplazarTexto(fraseInicial,index){
    do{
        fraseInicial = fraseInicial.replace(valores[index],llaves[index]);
    }while(fraseInicial.includes(valores[index]))
    return fraseInicial
}

function copiarTexto() {
    console.log(childResultado.value);
    
    navigator.clipboard.writeText(childResultado.value).then(()=>{alert("Texto copiado satisfactoriamente");})

}


