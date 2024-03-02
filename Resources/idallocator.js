//ID allocator
//build a service, class with two functions(allocate, release)
//Maxium ID (max integer) that I can allocate
//I am consuming this class, I need a new ID for the series that I am allocating, when i'm done with the ID it puts it back in the pool for
//is there a particular order i need to give out IDs? : No, there is no particular order
//are the IDs sequential ? : Yes from 0-9
//You wouldn't have 1 id being used by multiple users? : Right
//what does the solution depend on? : the amount of memory required to store from min to max
//allocate returns an interger ID
//Release returns ID to the database
//IDs are unique integers
//IDs are 0 to max, not including max
//integer is given into the constructor of the class
//allocate
//no input to allocate function
//Input: integer
//Release:

// class Allocator:

    // def allocate(self) -> int: {class takes nothing as a parameter and returns an integer}
    //     pass

    // def release(id: int) -> None:  {when you're done with the id, you release it back to the pool so it's free to tthe next allocator}
    //     pass


    //questions - there's no input to the allocate function
    //

    //Global variable = maximum

    // class Allocator{
    //     constructor(){
    //         let queue = new Array(m-1).fill()
    //     }

    //     function allocate(){
    //         //what kind of element is the ....item in the series?
    //         let registry = {}

    //         if(!registry[id]){

    //         }

    //     }

    //     funciton release() {

    //     }

    // }


    //PLAN
    //We were not making calls to a database so class constructor so we need a way to store and retrieve IDs from 0 to max, max is exclusive;
    //create a class called Allocator
    //I want to pick a datastructure where I will store these integers that will tell me if the integer is taken and if it's good or not? Maybe talk about the pros and cons
    //USE A SET OR AN ARRAY
    //Irene's use a hash and select ture of false if it's being used, and false if it's not being used.
    //For a n array, the set or array space would be O(n), n being the number of integers given in the input array, it only gets smaller from here


    //Approach 1: Hash Map
        //Constructor (to create the class) - O(m)- because i have to crete the keys
        //Allocate - O(m)
        //Release - O(1)
        //Space complexity - O(m)


    //Approach 1.5: Array of 0 to max - 1
        //


    //Approach 2: Linked List
        //When I need an ID, I use the head, when I'm not useing it, I'd return it to the talil
        //Approach 1 with 2: Hash Map with Linked List
        // Constructor (LL) -


//Quesiton for the Approach question, couldn't you use an array (or a queue) and just push/pop the ids as you use them and release them?


//Irene: went down path where she wanted to create an array or hash, and set an id to true if it's being used and false if it's not being used.


//My approach
//create an array of ids not being used and call it freeIds
//when I need an ID,
//we will  use a queue
//
//Constructor O(m)
//Allocate - O(1)
//Release - O(1)


//question, if we went through with the linkded list approach, what would the node look like?
//ask how it's like working for hte company
//ask if there's any immediate feedback for me
//what type ofprojects are you working on now and does
//


//KHUGAN'S FEEDBACK TO IRENE

// 10 - start
// 15 - question given
// 24 - order question
// 25 - asked about the order
// 26 - data structures
// - use a hash / keys for integers
// 28 - hash runtime
// 30 - figured out the contructor also has runtime characteristics
// 33 - array solution - same as approach 1
// 34 - linked list solution
// 38 - linked list w/ hash map
// 40 - constructor syntax confusion
// 41 - queue
// 45 - confused on using a hashmap
// 46 - prompted for bad user behavior
// 51 - error syntax confusion
// 55 - completed solution
// 00 - design decision to
// 10 - confusion on how to initialize a linked list


// - Candidate was able to come up with un-optimal hash solution quickly.
// - Proposed a linked list solution to keep track all free ids.
// - took a bit of prompting to understand that it effectively was a queue
// - Was able to catch bugs with if / else on self review of code
// - Didn't initially catch that we needed to keep the hash
// - Design on return value / exceptions was confusing - shows junior signal
// - good knowledge of runtime
// - recall of JS syntax
