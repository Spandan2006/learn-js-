const myObj = {
    'Js': "Javascript",
    "Cpp": "C++",
    "Rb": "Ruby",
    "Asm": "Assembly"
}

for (const key in myObj) {
    //console.log(key)    
   console.log(myObj[key])
}

const programming = ["JS", "cpp", "java", "rb", "asm"]

for (const key in programming) {
    // console.log(programming[key])
       console.log(key)    // ---> The differnce between forof and forin is that, in this it prints the index of each. For printing the values of arary, we have to do the upper method (line no. 16)
    
}
