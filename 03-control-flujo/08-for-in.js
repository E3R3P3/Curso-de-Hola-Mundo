let usuario = {
    id : 1,
    name: 'chachito feliz',
    age: 25
};

for (let propiedad in usuario){// para objetos
    console.log(propiedad,':',usuario[propiedad]);
}

let animales = ['gato', 'caballo', 'toro'];

for (let puesto in animales){
    console.log(puesto, animales[puesto]);
}