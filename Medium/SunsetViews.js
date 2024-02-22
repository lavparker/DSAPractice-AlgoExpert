// Sunset Views
// Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.
// A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.
// The input array named buildings contains positive, non-zero integers representing the heights of the buildings. A building at index i thus has a height denoted by buildings [i]. All of the buildings face the same direction, and this direction is either east or west, denoted by the input string named direction, which will always be equal to either "EAST" or "WEST"
// . In relation to the input array, you can
// interpret these directions as right for east and left for west.
// Important note: the indices in the ouput array should be sorted in ascending order.
// Sample Input #1
// buildings = [3, 5, 4, 4, 3, 1, 3, 2]
// direction = "EAST"
// Sample Output #1
// [1, 3, 6, 7]


function sunsetViews(buildings, direction) {
  // Write your code here.

  // let sort = ((a, b) => a - b);
  let highest = 0;
  let view = [];

  if (direction === 'WEST'){
    for(let i = 0; i < buildings.length; i++){
      let b = buildings[i];
      if(b > highest){
        // console.log(b, " is greater than ", highest, " index is ", i)
        highest = b
        view.push(i)
      }
    }
  }

  if(direction === 'EAST'){
    for(let i = buildings.length - 1; i >= 0; i--){
      let b = buildings[i];
      if(b > highest){
        // console.log("i've entered the east loop")
        // console.log(b, " is greater than ", highest, " index is ", i)
        highest = b
        view.push(i)
      }
    }
  }
  return view.sort((a, b) => a - b);
}

//will be given buildings and directions
//need to return array of indicies of the buildings that can see the sunset

//can see the sunset if it's taller than all of the buildings that come after it in the direction it faces


// create a variable called sort...set it equal to the sort function

//create a variable called highest and set it equal to 0;
//create a variable called view and set it equal to []
//if buildings are facing east, you need to iterate through the loop backwards
//if buildings are facing west, you need to iterate through the loop forwards

//set a variable called b1 = building[i]


//WEST
//if b1 > highest , view.push(i), highest = b1



//EAST
//if b1 > highest , view.push(i), highest = b1

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
