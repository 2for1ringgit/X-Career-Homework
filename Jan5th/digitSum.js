function totalSum (num) {
    if (num < 10 || num > 99) {
        alert('Invalid number')
        return;
    }
    alert(parseInt(num/10) + parseInt(num % 10));    
}
totalSum(45)
