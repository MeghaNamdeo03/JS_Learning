/* Promise: the promise object represents the eventual completion (or failure)
of an asynchronous operation and its resulting value.

A Promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation was completed successfully.
3. rejected: meaning that the operation failed.
*/

const promise1 = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promise1.then(function () {
    console.log('Promise consumed');
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(function () {
    console.log('Async 2 resolved');
});

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve({username:"Megha",email:"megha@gmail.com"})
    },1000)
})
promise3.then(function(user){
console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error)
            resolve({ username: "Megha", password: "123" });
        else
            reject('ERROR: Something went wrong');
    }, 1000);
});

const userPromise = promise4.then((user) => {
    console.log(user);
    return user.username;
});

userPromise.then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
});
async function consumePromise5(){
    const response=await promise5
    console.log(response);

}
consumePromise5()

async function consumePromise5(){
    try{
    const response=await promise5
    console.log(response);
    }
    catch(error){
        console.log(error);
    }

}
consumePromise5()