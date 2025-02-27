function getbyIndx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no encontrado';
    }
    return arr[idx];
}

let resultado = getbyIndx([1,2,3,4,5,6,7,8,9], 2);
console.log('Elemento: ',resultado);