let num = 33;
let strnum = String(num);
console.log(strnum);
console.log(typeof(num));
console.log(typeof(strnum));

let str = "Neha";
let num_str = Number(str);
console.log(num_str);
console.log(typeof(num_str));

//activity1-convert(number-string)(string-number)(bool-number)()

//Activity
//1.bool to number
console.log("Conversion")
let isFollow = true;
let boolNum = Number(isFollow);
console.log(isFollow);
console.log(boolNum);
console.log(typeof(boolNum));

//2.number to bool
let num1 = 23;
let numBool = Boolean(num1);
console.log(num1);
console.log(numBool);
console.log(typeof(numBool));

//3.bool to string
let isDeal = false;
let strBool = String(isDeal);
console.log(isDeal);
console.log(strBool);
console.log(typeof(strBool));

//4.string to bool
let str3 = "Hello";
let boolStr = Boolean(str3);
console.log(str3);
console.log(boolStr);
console.log(typeof(boolStr));


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

//activity2-check all above

let gameCounter = 100
gameCounter++
console.log(gameCounter)

let scoreCounter = 200
++scoreCounter
console.log(scoreCounter)

