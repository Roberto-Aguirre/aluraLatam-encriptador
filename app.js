/**
 * Reglas
 * Las "llaves" de encriptación que utilizaremos son las siguientes:

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

*/

//Elementos del DOM

//Guardo la condicion inicial donde no se tiene nada
const inicialResultado = document.getElementById("area-resultado");
const bloqueResultado = document.getElementById("resultado");
const textoResultado = document.getElementById("texto-resultado")

//Eventlisteners
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");

//Elementos creados

const childResultado  = document.createElement("textarea")
childResultado.setAttribute("readonly","")


//Variables globales
let frase = "";
let fraseArray = [];
let textArea = document.getElementById("texto");

function clickBtnEncriptar() {
    childResultado.value = juntarTexto(encriptarTexto(getTextareaValue()));
    
    if(childResultado.value!= ""){
        textoResultado.appendChild(childResultado);
        // console.log(textoResultado);
        inicialResultado.hidden = true;
        childResultado.hidden = false;
    }else{
        inicialResultado.hidden = false;
        childResultado.hidden = true;
    }
    
}
function getTextareaValue() {
    return textArea.value;
}
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
        fraseArray.push(letra);
    }
    // console.log(fraseArray);
    return fraseArray;
}   

function juntarTexto(fraseArray){
    let resultado = ""
    fraseArray.forEach(element => {resultado += element;});
    // console.log(resultado);
    return resultado
}

