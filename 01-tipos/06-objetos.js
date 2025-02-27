

let nombre = 'Tanjiro';
let anime = 'Demon slayer';
let edad = 16;

let personaje = {
    nombre:'Enmanuel',
    anime: 'nada',
    edad: 15
};//objeto literal
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['nombre']);

personaje.edad = 21;
personaje['anime'] = 'klk';

//eliminar propiedad

delete personaje.anime;

console.log(personaje);
