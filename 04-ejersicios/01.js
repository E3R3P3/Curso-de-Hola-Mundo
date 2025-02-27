
function cualEsMayor(a , b) {
    if (a < b) {
        return b;
    }else{
        if (a === b) {
            return 0;
        }else{
            return a;
        }
    }
}

let mayor = cualEsMayor(15, 15);

console.log(mayor);