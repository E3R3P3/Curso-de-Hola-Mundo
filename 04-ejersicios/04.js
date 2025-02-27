/*
Todos los mumero inpares hasta el 10
*/

let Numeros = [1,2,3,4,5,6,7,8,9,10];

function inPares(numeros) {

    for (let i = 0; i < numeros.length; i++) {
    
        if (numeros[i]%2 !== 0) {

            console.log(numeros[i]);
            
        }
    } 

}

inPares(Numeros);
