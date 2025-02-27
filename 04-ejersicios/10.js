/**Crear un arrys de n elemento autimaticamente */

let n = 13;


function getArry(numero) {

    let array = [];

    for(let i = 1; i <= numero; i++){

        array[i-1] = i;

    }
    return array;
}

let resultado = getArry(n);
console.log(resultado);