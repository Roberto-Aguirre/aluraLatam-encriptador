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

const childResultado  = document.createElement("p")
console.log(textoResultado);


//Variables globales
let frase = "";
let fraseArray = [];
let textArea = document.getElementById("texto");




function clickBtnEncriptar() {
    textoResultado.innerText = juntarTexto(encriptarTexto(getTextareaValue()));
    textoResultado.append(childResultado);
    console.log(textoResultado);
    inicialResultado.hidden = true;
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

