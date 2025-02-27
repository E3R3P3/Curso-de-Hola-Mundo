let obj = {};

let obj1 = new Object();

/**
 * new Arry(); []
 * new String(); '' "" ``
 * new Number(); 12
 * new Boolean(); true false
 */

function Usuario(params) {
    this.name = "Chanchito feliz";
}

let user = new Usuario();
console.log(user.constructor);