function largestNum (n) {
    if (n <= 1 || n >= 9){
        alert('Invalid number')
        return;
    }
    alert(`The largest number is ${Math.pow(10,n) - 1}`)
}
largestNum(3)