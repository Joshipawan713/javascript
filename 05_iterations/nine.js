// const arr = [1, 2, 3, 4];

// const initialvalue = 0;

// const sumwithvalue = arr.reduce(
//     (acc, current) => acc + current + initialvalue
// );

// console.log(sumwithvalue);


const myNums = [1, 2, 3, 4];

// const mytotal = myNums.reduce( function(acc, currentval){
//     console.log(`acc ${acc} and currentval ${currentval}`);
//     return acc + currentval
// }, 0);


// const mytotal = myNums.reduce( (acc, currentval) => (acc + currentval), 0);

const mytotal = myNums.reduce( (acc, currentval) => acc + currentval, 0);

// console.log(mytotal);

const shoppingcart = [
    {
        itemname:'js course',
        price:2999
    },
    {
        itemname:'python',
        price:2999
    },
    {
        itemname:'java',
        price:5999
    },
    {
        itemname:'mobile development',
        price:6999
    },
    {
        itemname:'dsa',
        price:7999
    }
]


const addtopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(addtopay);


// start video - https://www.youtube.com/watch?v=DcjNkHtDj8A&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=31