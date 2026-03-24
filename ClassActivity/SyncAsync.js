/*
Synchronous javascript -> code execute line by line
each task wait for previous task to finish
blocking in nature 

Asychronous javascript -> some task take time like api call,file read,
JS does not wait it moves to next line No-locking behaviour
uses - fetching data from server,reading file,set timeout api calls
*/
console.log("Start");

function add(a,b){
    return a+b;
}
let r = add(5,3);
console.log("result : "+r);
console.log("End");

//Asynchronous
//setTimeou is asychronous it wait 2 sec meanwhile js print end before inside timeout
console.log("Start");
setTimeout (() => {
    console.log("Inside Timeout"); 
},2000);
console.log("End");

/*
Activities-
1.guess the output game
2.blocking non-blocking code 2 ex
3.real time use of sync and async in company
4.api fetch activity

*/
