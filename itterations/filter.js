// const coding = ["Js", "Ruby", "Java", "asm"]


// const values = coding.forEach( (item) => {
//     return item
// } )

// console.log(values)  // For each does not return any value!!!! --> undefined 

// Filter **

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const value = myNums.filter( (num) => num > 4 ) //--> if you want to put "num > 4 " in curly braces then you have to use return keyword ..ex in line 15
const value = myNums.filter((num) => { 
    return num > 4
} )

console.log(value);

 