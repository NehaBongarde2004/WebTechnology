/*

--variable declaraion
let-once declared value can be redeclared-->used currently.It is block scope variable
const-once declared value cannot be redeclared again
var-same as let but used by earlier developer.It is not block scope variable

Datatypes - 

1.Primitive                                                  2.Non-primitive
number,string,boolean,undefine,null,bigint,symbol              object


Q.What is difference betn let,const and var?
Q.What "    "         "   (==) and (===)?

== ->check only condition
=== ->check condition as well as datatype


scope-In {} curly braces if we declare any variable then it is accessiable in that block only.

Limitation of using var-->When we use var in scope and then print it outside the scope then it take value in scope the the
value outside scope we declared.


Difference between null and undefined.
--> null is the absence of a value
--> A variable has been declared but not assigned a value

*/

//variable declaration
let myNum = 23;
let myStr = "JavaScript"
let myBool = true
let myNull = null
let myUndefine
let mySymbol = Symbol()
const student = {
    name : "Neha",
    id : 2,
    cgpa : 8.5,
    email : "neha@gmail.com"
}

console.log("typeof(myNum) : " + typeof(myNum))
console.log("typeof(myStr) : " + typeof(myStr))
console.log("typeof(myBool) : " + typeof(myBool))
console.log("typeof(myNull) : " + typeof(myNull))
console.log("typeof(myUndefine) : " + typeof(myUndefine))
console.log("typeof(mySymbol) : " + typeof(mySymbol))
console.log("typeof(student) : " + typeof(student))

const PI = 3.14
//PI = 2 ---> give error because const variable can't re-declared
console.log(PI)

//block of scope
var a = 10
let b = 20
const c = 30
{
    var a = 200
    let b = 300
    const c = 60
    console.log(a)
    console.log(b)
    console.log(c);
    
}
console.log(a,b,c)




