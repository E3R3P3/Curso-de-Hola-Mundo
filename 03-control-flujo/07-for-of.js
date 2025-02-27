// while
//do while
// for
let animales = ['chanchito feliz', 'Dragon', 'Parrito'];
console.log('For of');
for(let animal of animales){//Para arreglos
    console.log(animal);
}

console.log('While');
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}
console.log('For');
for (let i = 0; i < animales.length; i++) {
    
    console.log(animales[i]);
}