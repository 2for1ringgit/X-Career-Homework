function seatsInTheater (nCols, nRows,col,row) {
    return (nCols - col + 1) * (nRows - row)
}
console.log(seatsInTheater(16,11,3,6))