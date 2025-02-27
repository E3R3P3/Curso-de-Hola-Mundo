const user = {  id : 1 };

user.name = 'enmanuel';
user.guardar = function () {
    console.log('Guardando ', user.name);
}
user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

//const user1 = Object.freeze({id: 1});// Evita variar o agregar valores

const user1 = Object.seal({id: 1});// Evita agregar valores
user1.name = 'Enmanuel';
user1.id = 3;
console.log(user1);