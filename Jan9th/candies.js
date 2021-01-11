function candies (n,m) {
    if (n>m && m % n >0) {
        console.log('Invalid')
        return
    }
    else if (m % n === 0){
        return m;
    }
    return m - (m % n);
}
console.log(candies(5,28))