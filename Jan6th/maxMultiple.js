function maxMultiple (divisor,bound) {
    if (divisor < 2 || divisor >10 || bound < 5 || bound >100){
        console.log('Invalid');
        return
    }
    n = bound % divisor;
    return bound - n;
}
console.log(maxMultiple(4,18))