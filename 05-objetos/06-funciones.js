function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);

console.log(Usuario.length);

const U = Usuario;
let user = new U('Enmanuel');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
};
let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function retuned(params) {
    return function () {
        console.log('Hola mundo');
    }
}

let saludar = retuned();
saludar();