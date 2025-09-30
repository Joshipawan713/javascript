// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values); // undefined

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // method 1
// const newnums = mynum.filter((num)=> num > 4)

// // method 2
// const newnums = mynum.filter((num)=> {
//     return num > 4
// })


// // using foreach
// let newnums = [];
// // mynum.filter((num)=> {
// //     newnums.push(num);
// // })

// mynum.filter((num)=> {
//     if (num > 4){
//         newnums.push(num);
//     }
// })

// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const userbooks = books.filter( (item) => item.genre == 'History')

const userbooks = books.filter ( (item) => { 
    return item.publish >= 1995 && item.genre == 'History'
})

console.log(userbooks);