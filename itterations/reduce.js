const myNums = [1,2,3]

const Total = myNums.reduce( (acc, curval) => acc + curval ,0) //acc = accumulator and curval = current value 
                                                            //this 0 is the initial value
    
console.log(Total)


//Really important Rick please revise this again and again to actually understand reduce method

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "android dev course",
        price : 7999
    },
    {
        itemName : "data sci course",
        price : 12999
    },

]

let totalPrize = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalPrize);
