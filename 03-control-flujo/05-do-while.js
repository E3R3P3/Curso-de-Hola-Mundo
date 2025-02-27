// Demuestra la diferencia entre el comportamiento de while y do_while





let i = 2;

console.log('While:');

while (i < 10) {
    
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

i = 0;
console.log('Do While:');
do {
    
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
} while (i < 10);