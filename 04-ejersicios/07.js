
function precioCOmpleto(precio, impuesto) {
    let totalImpuesto = precio * impuesto;
    console.log(totalImpuesto);
    let result = totalImpuesto + precio;
    return result;
}

let resultado = precioCOmpleto(19.90, 0.15);
console.log('Precio:',resultado);