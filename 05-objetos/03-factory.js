

function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperar clave...');
        },
    };
}

let usuario = crearUsuario('Ramon','ramon@ggg.com');

console.log(usuario);