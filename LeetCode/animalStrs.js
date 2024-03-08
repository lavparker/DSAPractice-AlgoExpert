function animalStrs(array, n){
    let newArr = [];
    let remainder = (array.length - n).toString();
            let count = 0;



        for(let i = 0; i < array.length; i++){
            let ele = array[i];
            if(count < n){
            newArr.push(ele)
            count++

            }


        }

    let newSentArr = newArr.push("and", remainder, "more topics")

    // return newSentArr.join(" ")
    let limitStrArr =  newArr.join(",")

    let limiArr = limitStrArr.substring(0,4)

    return limiArr; 
}


let array = ["Animals", "Baking", "Cooking", "Dogs"]
let n = 2;

console.log(animalStrs(array, n));

// The output would be: “Animals, Baking, Cooking and Dogs”
