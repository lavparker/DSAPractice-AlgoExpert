// Transpose Matrix
// You're given a 2D array of integers matrix.
// matrix. Write a function that returns the transpose of the
// The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.
// You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.


// Sample Input #1
// matrix = [
// [1, 2],
// ]

function transposeMatrix(matrix) {
  let cols = matrix.length; 
  let rows = matrix[0].length; 
  let transposed = new Array(rows); 

  for(let i = 0; i < rows; i++){
    transposed[i] = new Array(cols); 
    for(let j = 0; j < cols; j++){
      transposed[i][j] = matrix[j][i]
    }
  }
  
  return transposed; 
  
}

// O(WxH) time & space because it depends on how wide and high the matrix is 

//create a variable called transposed 

//while the length of transposed is less than the length of the first array in 
//the matrix, push the element at the [i] position of each array

//return transposed 
// _____________________________________________________________
//initialize a variable to figure out how many columns there are 
//initialize a variable to figure out how many rows there will be using the first array 
//create an empty matrix using the number of columns (by pushing arrays into the matrix)
//loop through the matrix using a nexted loop of number of columns and
// number of rows set each individual number equal to the 
// transposedMatrix position that you created above
// return the transposed matrix 