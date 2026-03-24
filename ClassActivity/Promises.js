/*
Promise - A promises is an object hat represent future result of an asynchronous operation
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
2.create 4 promises ex - use asyn keyword promises 
*/
const myPromises1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log("Asynchronous task completed");
        resolve();
    },3000);
});
myPromises1.then(() => {
    console.log("Promise consume");
});

const myPromises2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username : "Neha", id : 17});
    },3000);
});
myPromises2.then((user)=>{
    console.log(user); 
});