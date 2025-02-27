// Short-circuit

// Falso
// falce
// 0
// ''
// null
//undefined
//NaN

let nombre = ''
let username = nombre || 'Chanchito Feliz';
console.log(username);

function Fn1() {
    console.log('Soy una funcion 1');
    return false;
}
function Fn2() {
    console.log('Soy una funcion 2');
    return true;
}

let x = Fn1() && Fn2();

