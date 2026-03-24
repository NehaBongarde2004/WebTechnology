/*
Synchronous - Means the code runs in a particular sequence of instruction given in the program.Each instruction waits for the
previous instruction to complete its execution.

Asychronous - Asynchronous code execution allows to execute next instrutions immediately and doesn"t block the flow.
*/
//synchronous
console.log("start");
console.log("two");
console.log("end");

//asychronous
console.log("Start");
setTimeout(function hello(){
    console.log("Hello");
},1000);
console.log("end");

/*
callback - A callback is a function passed as an argument to another function.
*/
function sum(a,b){
    console.log(a + b); 
}

function calculator(a ,b, sumCallback){
    sumCallback(a,b);
}
calculator(7,8,sum);//pass without bracket 

/*
Callback hell - Nested callback stacked below one another forming a pyramid structure.(Pyramid of Doom)
*/
// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// //callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });

/*
To solve the callback hell problem there's come promises

Promises - Promise is for "eventual" completion of task.It is an object in JS.
let promise = new Promise((resolve,reject)=>{...})
States of promises - pending,resolve,rejected

for resolved promise - promise.then((res)=>{})
for rejected promise - promise.catch((err)=>{})

*/

//promise
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success")
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}
let finalVal = getData(123);

/*
Async- Await - 
async function always returns a promise
async function myFunc(){}
await pauses the execution of its surrounding async function until the promise is settled.

*/
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve(200);
        },2000)
    });
}
async function getWeatherData() {
    await api(); //1st
    await api();
}


