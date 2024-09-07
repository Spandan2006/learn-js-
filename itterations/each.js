const coding = ["js", "ruby", "java", "cpp"]

 coding.forEach(function (item) {    //since its a callback fn, it doesnt need any name so just write function.
     console.log(item);
    
 })

coding.forEach( (value) => {
    console.log(value)
}  )

// using diff fn 

function printMe(element){
    console.log(element)
}

coding.forEach(printMe)

//

coding.forEach( (i, index, arr) => {
    console.log(i, index, arr)
} )

//complex obj inside the arr

const myCoding = [
    {
        'Name' : 'Javascript',
        'File' : 'Js'
    },
    {
        'Name' : 'Python',
        'File' : 'Py'
    },
    {
        'Name' : 'Assembly',
        'File' : 'Asm'
    },
]

myCoding.forEach( (elm) => {
    console.log(elm.Name)
}  )