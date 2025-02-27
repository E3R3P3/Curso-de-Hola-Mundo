/**
 * Devolber la cantida de numero positivos de un arry
 */

let arry = [1,4,55,3,2,5,3,-88,6,4,0,-5,5,7,3,5]

function cuantosPositivos(arr) {
    let cout = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] >= 0){
            cout++;
        }

    }

   return cout;
}

let resultado = cuantosPositivos(arry);
console.log(resultado);