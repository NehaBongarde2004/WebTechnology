/*
--Logical operator
< , > , == , != , <= , >=

*/

console.log(2>1)
console.log(2<1)
console.log(2==2)
console.log(2!=1)
console.log(2>=3)
console.log(2<=3)

console.log("2" > 1)
console.log("02" > 1)


console.log(null > 0)
console.log(null == 0)
console.log(null <= 0)

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined <= 0)

console.log("2"=== 2)
console.log("2" ==2)

//activity3-check why true/false is coming using null and undefined

/*
console.log("2" > 1) -->internal conversion "2" -> number 2    output->true
console.log("02" > 1) -->internal conversion "02" -> number 2     output->true

//all about null 
console.log(null > 0)   --> 0 > 0 ->false
-->null is converted to number  null ->0 

console.log(null == 0) --> undefined == 0 -> output - false
-->== rules:
null is only equal to undefined
NOT equal to any number

console.log(null <= 0) --> 0 <= 0 --> output - true
-->null → 0

//all about undefined
console.log(undefined > 0) --> NaN > 0 --> output - false
-->undefined → NaN

console.log(undefined == 0)--> output - false
-->== rules:
undefined equals only null
NOT equal to 0

console.log(undefined <= 0) --> output - false
-->NaN <= 0

console.log("2"=== 2) --> output - false
--> === check both the condition and datatype 

console.log("2" ==2)
--> == check only condition

*/