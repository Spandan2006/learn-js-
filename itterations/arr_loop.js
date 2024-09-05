let myArr = [1,2,3,4,5]

for (const element of myArr) {
 //   console.log(element)
}

let greetings =  "Hello world"

for (const element of greetings) {
  //  console.log(`The characters are ${element}`)
}

//maps

let map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")
map.set('IN', "India")

//  console.log(map)

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`)
}