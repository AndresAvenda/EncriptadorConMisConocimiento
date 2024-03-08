
let listVoca = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let listEncr = ["z","y","x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", " "];


let textoPrueba = "";
let textoEncriptado = "";
let textoDesencriptado = "";

textoEn = textoPrueba[0];
console.log(textoEn);



function encriptar(listVoca, listEncr, textoPrueba, textoEncriptado){

    let contP = 0;
    let contV = 0;

        for(i = 0; i <= listVoca.length ; i++){
            console.log(textoPrueba[contP], listVoca[contV], contV, contP, textoPrueba.length);
            if(textoPrueba[contP] === listVoca[contV]){
                console.log("si entra");
                textoEncriptado += listEncr[contV];
                console.log(textoEncriptado);
                contP++;
                contV = -1;
                i = 0;
            }

            if(textoPrueba.length === contP){
                break
            }
            contV++;
        }
    return textoEncriptado;
}

function Desencriptar(textoPrueba, textoDesencriptado, listEncr){
    let contP = 0;
    let contV = 0;
    for(i = 0; i <= listVoca.length ; i++){
        console.log(textoPrueba[contP], listEncr[contV], contV, contP, textoPrueba.length);
        if(textoPrueba[contP] === listEncr[contV]){
            console.log("si entra la encriptacion");
            textoDesencriptado += listVoca[contV];
            console.log(textoDesencriptado);
            contP++;
            contV = -1;
            i = 0;
        }

        if(textoPrueba.length === contP){
            break
        }
        contV++;
    }
    return textoDesencriptado;

}

function clickEn(){
    textoPrueba = document.getElementById("texto").value;
    console.log("encriptar " + textoPrueba)
    textoEncriptado = encriptar(listVoca, listEncr, textoPrueba, textoEncriptado);
    let textoResultado = textoEncriptado; 
    ponerTexto(textoResultado);
}

function clickDe(){
    console.log("desencriptar " + textoDesencriptado)
    textoPrueba = document.getElementById("texto").value;
    textoDesencriptado = Desencriptar(textoPrueba, textoDesencriptado, listEncr, listVoca, );
    let textoResultado = textoDesencriptado; 
    ponerTexto(textoResultado);
}

function ponerTexto(textoResultado){
    console.log(textoResultado);
    texto = document.getElementById("textoEncriptado");
    texto.innerHTML = textoResultado;
    textoPrueba = "";
    textoEncriptado = "";
    textoDesencriptado = "";


}

