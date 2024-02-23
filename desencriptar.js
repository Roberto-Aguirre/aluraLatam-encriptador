// let frase = "hoberlai qufatenter paisai genterntenter denter yufattufatb"
let frase = "enter imes ai ober ufat ufat"

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

llaves = Object.values(desencriptar);
valores = Object.keys(desencriptar);

// console.log(frase);

// llaves.forEach(index=> { 
//     console.log(`${index}`)}
    
//     );
    
while(frase.includes("enter" || "ober" || "imes" || "ai" || "ufat")){
    for (let index = 0; index < frase.length; index++) {
        frase = frase.replace(llaves[index],valores[index]);
        console.log(frase);
    }
    
}
// console.log(frase.includes(llaves.forEach(element => {
//     return element}
//     )));


