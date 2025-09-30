const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// // method 1
// coding.forEach((item) => {
//     console.log(item);
// });
    
    
// // method 2
// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// // method 3
// coding.forEach( (item, index, arr)=> {
//     // console.log(`${item} , ${index+1}`);
//     console.log(`${item}, ${index}, ${arr}`);
// });


const mycoding = [
    {
        languagemame: 'python',
        languagefilename: 'py',
    },
    {
        languagemame: 'javascript',
        languagefilename: 'js',
    },
    {
        languagemame: 'java',
        languagefilename: 'java',
    },
]

mycoding.forEach((item) => {
    console.log(`${item.languagemame} is my language name and its extension ${item.languagefilename}`);
    // console.log(item.languagemame);
    // console.log(item.languagefilename);
});