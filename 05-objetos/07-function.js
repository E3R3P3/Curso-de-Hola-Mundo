function Punto(x, y) {

    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log('Dibujar...'); }
    
}





//Ojo nunca usar
// const Point = new Function('x', 'y',`
//     this.x = x;
//     this.y = y;
//     this.dibujar = function () { console.log('Dibujar...'); }
// `);
// const p = new Point(1,2);
// console.log(p);
// console.log(p.dibujar());
// 
// 


//Extender objetos

let punto = {z : 4};

// Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]);

console.log(punto);