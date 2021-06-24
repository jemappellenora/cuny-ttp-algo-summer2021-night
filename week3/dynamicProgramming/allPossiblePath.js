var uniquePaths = function(m, n) {
    /*
    */
  const arr = new Array(m).fill(new Array(n).fill(1))
    for( let row = 1; row < m; row++ ){
         for( let col = 1; col <n; col++ ){
            arr[row][col] = arr[row-1][col] + arr[row][col-1]
        }
    }
    return arr[m-1][n-1]
}