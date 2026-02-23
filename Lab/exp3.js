//activities-
/*
1.diff between arrow function and simple function
2.what is use this keyword use in array func and simple func
3.why we not use this keyword in arrow func
4.write code for arrow function 3 ex
5.write a code for switch case
6.how o use truty and falsy value in js ex
7.write a code for how to use loops in arraywith ex
8.what is diff betn for of and for in with ex 1.forof loop is used for strings/arrays not for object
                                             -2.forin loop is used for object i return the keys in object
9.write a code for map and filter in js with 3 ex
10.how to use trenary opreator in js

*/


//1.diff between arrow function and simple function
//arrow function
let arrayFunc = (arr1) => {
    let sum = 0;
    for(let i = 0; i<arr1.length;i++){
        sum += arr1[i];
    }
    return sum;
}
let arr = [2,3,1,4];
let sum = arrayFunc(arr);
console.log(`The sum of array element is ${sum}`);

//simple function
function diff(a,b){
    return a - b;
}
result = diff(4,3);
console.log(`The difference : ${result}`);


//2.what is use this keyword use in arrow func and simple func
/*
this in simple function :- this depends on how the function is called
*/
//simple function
let user = {
    name : "Neha",
    greet : function (){
        console.log(this.name);    
    }
};
user.greet(); //Neha
//Here this refers to the user object

//Normal func inside another func
let user1 = {
    name : "Neha",
    greet : function (){
        function inner(){
            console.log(this.name);    
        }
        inner();
    }
};
user1.greet();

//Arrow function - arrow function does not bind this to user2 
let user2 = {
    name : "Neha",
    greet : () => {
        console.log(this.name);    
    }
};
user2.greet(); 

//Normal func inside another func - arrow function akes this from greet()
let user3 = {
    name : "Neha",
    greet : function (){
       let inner = () =>{
        console.log(this.name); 
       };
       inner(); 
    }
};
user3.greet();

//3.why we not use this keyword in arrow func
/*
Arrow functions do not have their own this.
They inherit (borrow) this from the surrounding scope, so using this inside an arrow 
function does not refer to the object that calls it.
*/
//simple function
let otherUser = {
    name : "Soham",
    sayHi : function (){
        console.log(this.name);    
    }
};
otherUser.sayHi();

//arrow function - this does NOT point to user, It takes this from outside (global scope)
let otherUser1 = {
    name : "Soham",
    sayHi : () => {
        console.log(this.name);    
    }
};
otherUser1.sayHi(); //undefined



//4.write code for arrow function 3 ex
let add = (a,b) => {
    let c = a + b; 
    console.log("Addition : "+ c);  
}
add(3,4)

let fact = (num) => {
    let f = 1;
    while(num>0){
        f = f*num;
        num--;
    }
    console.log(`Factorial is ${f}`);  
}
fact(2)

let mul = (a,b) =>{
    let c = a * b;
    console.log(`Multiplication: ${c}`);   
}
mul(4,5)

//5.write a code for switch case
let a = 5;
let b = 2;
let choice = "mod";

switch(choice){
    case 'add':
        console.log("Addition : "+ (a+b));
        break;
    
    case 'sub':
        console.log("Substration : "+ (a-b));
        break;

    case 'multi':
        console.log("Multiplication : "+ (a*b));
        break;

    case 'div':
        console.log("Division : "+ (a/b));
        break;
 
    case 'mod':
        console.log("Modulus : "+ (a%b));
        break;

    default :
        console.log("Invalid choice");    
}


//6.how to use truty and falsy value in js ex
/*
falsy values - false, 0, -0, 0n, "", null, undefined, NaN
truthy values - true, 1, -1, "0", "false", [], {}, function(){}
*/
let username = "";

if(username){
    console.log("User logged in");
}else{
    console.log("Guest user");
}

//7.write a code for how to use loops in array with ex
let array = [2,4,5,6,7,8];

for(i=0;i<array.length;i++){
    console.log(array[i]);  
}


//8.what is diff betn for of and for in with ex 
//-1.forof loop is used for strings/arrays not for object
//-2.forin loop is used for object i return the keys in object

//forof loop - 1.used to iterate over values , 2.works with arrays,strings
let arr1 = [10,20,30,40,50];

for(let element of arr1){
    console.log(element);
}

//forin loop - 1.used to iterate over keys/indexex, 2.Mostly used with objects
const obj = {
    name : "NDP",
    age : 21,
    canVote : "true"
}
for(let key in obj){
    console.log(key);    
}


//9.write a code for map and filter in js with 3 ex
/*
map()- changes every element
1.map() goes to each element one by one
2.Does something to it
3.Creates a NEW array with changed values
4.Original array stays the same

filter() — “Select only needed elements”
1.filter() checks each element
2.If condition is true → keep it
3.If condition is false → remove it
4.Creates a NEW array

*/
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num*2);
console.log(doubled);
console.log(numbers);

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

//10.how to use trenary opreator in js

let marks = 70;
let result1 = (marks >= 40) ? "Pass": "Fail";
console.log(result1);


