/**
 * Reglas
 * Las "llaves" de encriptación que utilizaremos son las siguientes:
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"
*/

let fraseInicial = "hoberlai genterntenter denter yoberufattufatbenter menter gufatstai enterl tufatyufatb y menter gufatstai cobercimesnair"


const desencriptar = {
    e: "enter",
    o: "ober",
    i: "imes",
    a: "ai",
    u: "ufat"
}

const valores = Object.values(desencriptar);
const llaves = Object.keys(desencriptar);

let fraseResultado = fraseInicial;
function mostrarTextoResultado(valores) {
    for (let i = 0; i < valores.length; i++) {
    
        fraseResultado = remplazarTexto(fraseResultado,i);
    }
    return fraseResultado    
}

function remplazarTexto(fraseInicial,index){
    do{
        fraseInicial = fraseInicial.replace(valores[index],llaves[index]);
    }while(fraseInicial.includes(valores[index]))
    console.log(fraseResultado);
    return fraseInicial
}

console.log(mostrarTextoResultado(valores));






// let a = fraseInicial.match(/enter/g);
// console.log(a);
// a == null? a= 0: a=a.length;
// console.log(a);

// let contadorCoincidencias = 2;
// for (let i = 1; i <= a; i++) {
//     fraseInicial = fraseInicial.replace(valores[0],llaves[0]);
//     console.log(fraseInicial);
// }

//bucle que haga la funcion.


















// while(0<=frase.match(llaves[1])){
//     for (let index = 0; index < frase.match; index++) {
//         frase = frase.replace(llaves[index],valores[index]);
//         console.log(frase);
    
// }
// }

    // while(frase.includes(llaves[posicion])){
    //     for (let index = 0; index < frase.match(llaves[posicion]); index++) {
    //         frase = frase.replace(llaves[posicion],valores[posicion]);
    //         console.log(frase);
    //     }
    
    // }

    


          
               
// console.log(frase.includes(llaves.forEach(element => {
//     return element}
//     )));


