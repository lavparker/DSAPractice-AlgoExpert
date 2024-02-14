// String Matrix

// Given a message (string) and two constraints r (row) and c (column), create a cipher function that prints a message in the form of a matrix traveling from top to bottom, and then left to right (as opposed to going right to left, and then down the columns).

// example:

// string = "Hello"
// r = 3
// c = 2

// matrix =

// 'h' 'e' 'l'  // [0,0], [0, 1], [0, 2]
// 'l' 'o' ' ' //  [1, 0], [1, 1], [1, 2]

// final string = 'hl eo l "


function springMatrix(string, r, c){
    let newStr = string.toLowerCase();
    let idx = 0;
    let ciphered ='';
    let newMatrix = []

    for(let i = 0; i < r; i++){
        newMatrix.push([]);
    }

    for(let i = 0; i < c; i++){
        for(let j = 0; j < r; j++){
            if(idx < newStr.length){
                newMatrix[i][j] = newStr[idx]
                idx++
            }else{
                newMatrix[i][j] = ' ';
            }
        }
    }

    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            ciphered += newMatrix[j][i]
        }
    }
    return ciphered
}

console.log(springMatrix('Hello', 3, 2))

//create a variable called newStr and set it equal to string.lowercase()
//create a variable call idx and set it = 0
//create a variable called ciphered and set it equal to an empty string
/////

//loop through the 2d array
//for(let i = 0; i < c; i++) //i has to be less than the length of the column
//let row = ''
//for(let j = 0; j < r; j++)
// if(idx < string.length) //while?
//add string[idx] to ciphered
//idx++
// if the the length of the message is greater than the length of the array, add a space to ciphered

//once outside of the loop

//return ciphered
