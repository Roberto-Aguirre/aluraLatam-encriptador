const inicial = document.getElementById("area-resultado");
const bloqueResultado = document.getElementById("resultado");
console.log(inicial);
const textarea = document.getElementById("texto");
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");

let frase = "";


/**
 * Reglas
 * Las "llaves" de encriptación que utilizaremos son las siguientes:

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

*/


let fraseArray = [];

function traerTexto() {
    let frase = textarea.innerText;
    return frase;
}

function encriptar(frase,fraseArray){
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
    return fraseArray;
}

encriptar(frase,fraseArray);

console.log(fraseArray);
console.log(frase[0]);


