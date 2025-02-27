function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultdo  = suma(5, 6, 1, 2, 3);
console.log(resultdo);
console.log(typeof suma);
