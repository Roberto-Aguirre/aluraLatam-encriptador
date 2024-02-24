// let frase = "hoberlai qufatenter paisai genterntenter denter yufattufatb"
let frase = "enter imes ai ai ai ai ober ufat"

/**
 * Reglas
 * Las "llaves" de encriptación que utilizaremos son las siguientes:

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

*/

// frase.includes("hola") ? frase.replace("hola","h"): console.log("false");
const desencriptar = {
    e: "enter",
    o: "ober",
    i: "imes",
    a: "ai",
    u: "ufat"
}


// console.log(Object.values(desencriptar));
// console.log(Object.keys(desencriptar));

const llaves = Object.values(desencriptar);
const valores = Object.keys(desencriptar);

// console.log(frase);

// llaves.forEach(index=> { 
//     console.log(`${index}`)}
    
//     );


function filtro(frase) {
    

}

let estatus = true;
let completo = false;

do {
let posicion = 0;
do{

    while(frase.includes(llaves[posicion])){
        for (let index = 0; index < frase.match(llaves[posicion]); index++) {
            frase = frase.replace(llaves[posicion],valores[posicion]);
            console.log(frase);
        }
    
    }
}while(contador<=llaves.length)

    
} while (completo);

          
               
// console.log(frase.includes(llaves.forEach(element => {
//     return element}
//     )));


