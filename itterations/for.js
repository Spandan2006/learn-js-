//for 

for (let i = 0; i <= 10; i++) {
    console.log(i)
    
}

for (let i = 1; i <= 10; i++) {
   console.log(`Outer loop value ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i*j}`)
    
   }
    
}

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}

//break and continue

for (let i = 1; i <= 20; i++) {
    

    if (i == 5) {
        console.log("5 is detected")
        // break
        continue
    }
    console.log(`value of i is ${i}`);
}