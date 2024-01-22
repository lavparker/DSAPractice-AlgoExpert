// Spiral Traverse 

// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.
// Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.


// Sample Input
// array = l
// 11,
// 2,
// 3, 4],
// [12, 13,
// 14, 51,
// [11, 16, 15, 6],
// 110, 9, 8, 71,
// Sample Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//savebounds to variables , start row, endrow, startcol, endcol 
//right, incrementing, hit last column 
// down, incrementing, not including first elel, hit last row
// back, decrementing not including rirst Element, hit firtsn col 
// up, decrement, not including the first element,, hit, and NOT INCLUDING first row, 
// move bounds in by 1
// stop when endRow >= startRow or when endCol >= startcol 

//return: Id array of the elements in spiral order 
//

//top row, is a forloop (for every value starting at the starting columng and ending at the ending column)
//
