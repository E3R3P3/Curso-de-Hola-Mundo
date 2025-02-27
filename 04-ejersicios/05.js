/**
 * Funcion que obtenga el lemento mayor y menor de un arry
 * 
 */

let arry = [2,5,9,6,2,2,7,4,8,3]

function getMenorMayor(listaNumeros) {
    
    let mini = arry[0], max = arry[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        
        if ( listaNumeros[i] > max) {
            max = listaNumeros[i];
        } else {
            if (listaNumeros[i] < mini ) {
                mini = listaNumeros[i];
            }
        }

    }
    return [mini,max];
}
let numeros = getMenorMayor(arry);
console.log(numeros);

function get2MenorMayor(Lista) {
    let mayor = Lista[0];
    let menor = Lista[0];

    for (idx of Lista ){

        menor = menor < idx ? menor : idx;
        mayor = mayor > idx ? mayor : idx;

    }
    return [menor, mayor];
}
let elementos = get2MenorMayor(arry);
console.log(elementos);