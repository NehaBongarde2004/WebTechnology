/*
Promise - A promises is an object that represent future result of an asynchronous operation
Promises means i promise to give result later
real-time ex- zomato appln(resolve or reject)
promises has three state -
1.pending/waiting
2.resolve/success
3.rejected

pending
   |
resolve -- reject    

*/
let myPromises = new Promise((resolve,reject) =>{
    let success = false;
    if(success){
        resolve("Data fetch successfully");
    }
    else{
        reject("Error while fetching data");
    }
});

myPromises.then((result) => { //run when success
    console.log(result);
}).catch((error) => {   //run when error
    console.log(error);
});

/*
Activity-
1.why promises is better than callback

Problem with Callbacks
Leads to callback hell (nested functions)
Hard to read & maintain
Error handling is messy

Advantages of Promises
Cleaner & readable
Avoid nesting
Easy error handling using .catch()
Supports chaining


2.create 4 promises ex - use asyn keyword promises 
*/


//2.create 4 promises ex - use asyn keyword promise

const myPromises1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log("Asynchronous task completed");
        resolve();
    },3000);
});

const myPromises2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username : "Neha", id : 17});
    },3000);
});

const myPromises3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;

        if(success){
            resolve("Data fetched successfully");
        } else {
            reject("Error occurred");
        }
    }, 3000);
});

const myPromises4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = 10;
        resolve(num * 2);
    }, 3000);
});

async function handlePromises() {
    try {
        await myPromises1;
        console.log("Promise 1 consumed");

        let user = await myPromises2;
        console.log(user);

        let msg = await myPromises3;
        console.log(msg);

        let result = await myPromises4;
        console.log("Result:", result);

    } catch(error) {
        console.log("Error:", error);
    }
}

handlePromises();