let pairs = [
    [1, {name : 'Enmanuel'}],
    [2, {name: 'tom'}],
    [3, {name: 'culo'}],
]

function getObject(par) {

    let list = [];
    
    for(idx in par){

        let objeto =  par[idx];

        list[idx] = objeto[1];

        list[idx].id = objeto[0];


    }
    return list;
}

let resultado = getObject(pairs);
console.log(resultado);