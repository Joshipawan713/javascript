const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log('Promise Consumed');
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Task 2 Promise Completed');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Javascript', email: 'java@example.com'});
    }, 1000);
});


promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Javascript1', email: 'java@example.com', password: '12345'});
        }
        else{
            reject('Error: Something wen wrong');
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected') );


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'python', email: 'python@example.com', password: '12345'});
        }
        else{
            reject('Error: Something wen wrong');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response); 
    } catch (error){
        console.log(error);
    }
   
}

consumePromiseFive();


// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error){
//         console.log(error);
//     }
// }

// getallusers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})