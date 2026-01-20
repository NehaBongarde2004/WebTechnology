/*

--Conversion operator
We can convert one datatype to another.
To convert num to string use - String()
"    "     string to number - Number()
"    "     boolean to number - Number()
"    "     number to boolean - Boolean()
"    "     boolean to string - String()
"    "     string to boolean - Boolean()

*/

//number to sring
let num = 33;
let strnum = String(num);
console.log("Number to String : ")
console.log("strnum : " + strnum);
console.log("typeof(num) : " + typeof(num));
console.log("typeof(strnum) : " + typeof(strnum));

//string to number
let str = "Neha";   
let num_str = Number(str);
console.log("String to Number : ")
console.log("num_str : " + num_str);
console.log("typeof(num_str): " + typeof(num_str));

//activity1-convert(number-string)(string-number)(bool-number)()

//Activity
//1.bool to number
let isFollow = true;
let boolNum = Number(isFollow);
console.log("Boolean to Number: ")
console.log("isFollow : "+isFollow);
console.log("boolNum : "+boolNum);
console.log("typeof(boolNum) : " + typeof(boolNum));

//2.number to bool
let num1 = 23;
let numBool = Boolean(num1);
console.log("Number to Boolean : ")
console.log("num1 : " + num1);
console.log("numBool : " + numBool);
console.log("typeof(numBool) : " + typeof(numBool));

//3.bool to string
let isDeal = false;
let strBool = String(isDeal);
console.log("Boolean to String : ")
console.log("isDeal : " + isDeal);
console.log("strBool : " + strBool);
console.log("typeof(strBool) : " + typeof(strBool));

//4.string to bool
let str3 = "Hello";
let boolStr = Boolean(str3);
console.log("String to Boolean : ")
console.log("str3 : " + str3);
console.log("boolStr : " + boolStr);
console.log("typeof(boolStr) : " + typeof(boolStr));


console.log("Arithmetic operators")
//Operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1 = "Hello"
let str2 = " Neha"
console.log(str1 + str2)


//Imp note - JS only automatically convert a string to number in arthmetical operations
console.log("1" + 2)
console.log("1" + 2+2)
console.log(1 + "2")
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)
console.log(+ "")


/*

--Arithmetic operators
+, - , * , /, %

To concat strings we use + operator

IMP-when one is string with number and other is number and when we try it to add using + operator then we get 
one string with number.The number is concat with the string
console.log("1" + 2) --> 12

console.log(1+2 + "2") --> 32
This show 1st it add numbers from left and then concat with sring

console.log(true) --> true
console.log(+true) --> 1  --> + operator convert the boolean to number
console.log(+ "") --> 0  --> same as above


*/

let gameCounter = 100
gameCounter++
console.log(gameCounter)

let scoreCounter = 200
++scoreCounter
console.log(scoreCounter)

