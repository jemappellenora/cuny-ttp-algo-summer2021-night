/*
    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
        which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time




*/
var minPathSum = function(grid) {
    for(let row = 1; row < grid.length; row++){
        grid[row][0] += grid[row-1][0]
    }
 
    for(let col = 1; col < grid[0].length; col++){
     grid[0][col] += grid[0][col-1]
  }
 
     let minSum = 0;
     for(let row = 1; row < grid.length; row++){
         for(let col = 1; col < grid[0].length; col++){
             let smallerVal = Math.min(grid[row-1][col], grid[row][col-1])
             grid[row][col] += smallerVal
          }
     }
     console.log(grid)
     return grid[grid.length-1][grid[0].length-1]
};