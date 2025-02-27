let a = 1;
let b = a;

b++;

console.log('caso normal', a, b);

let aa = {};
let bb = aa;

bb.prop = 1;

console.log('caso objeto', aa , bb);

// Caso de la suma 

let x = 1;
function suma(n) {
    n++;
}

suma(x);

console.log('caso funcion', x);

// Caso de la suma objeto

let x2 = {prop: 1};
function sumaProp(n) {
    n.prop++;
}

sumaProp(x2);

console.log('caso funcion con referencia', x2);