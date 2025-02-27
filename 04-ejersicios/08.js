
let arrys = [{
    id : 1,
    name : 'carlos',
},{
    id : 2,
    name : 'pepe',
},{
    id : 3,
    name : 'carlojuans',
}]

/**cambiar a pares
 * 
 */

function hacerPares(arr) {
    let pairs = [];
    for(idx in arr){

        let elemento = arr[idx];

        pairs[idx]= [elemento.id, elemento]

    }

    return pairs;
}

let resultado = hacerPares(arrys);
console.log(resultado);