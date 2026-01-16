//const num = 23;
//num = 34;
//console.log(num);

let x = 2;
var y = 3;
{
    let x = 200;
    var y = 300;
    console.log(x,y);
}
console.log(x,y);

//activity1 - display student detail - name,id,email
//check number is even or odd
//check student pass or fail
//print numbers

//activity1 - display student detail - name,id,email,cgpa,
let studentName = "Neha Bongarde";
let studentId = 12;
let studentEmail = "neha@gmail.com";
let cgpa = 8.5;
console.log("Name : " + studentName);
document.writeln("Name : " + studentName);
console.log("Id : " + studentId);
document.writeln("Id : " + studentId);
console.log("Email : " + studentEmail);
document.writeln("Email : " + studentEmail);
console.log("CGPA : " + cgpa);
document.writeln("CGPA : " + cgpa);

//activity2 - check number is even or odd
let num = 40;
if(num % 2 == 0){
    console.log(num + " is even number.")
    document.writeln(num + " is even number.");
}
else{
    console.log(num + " is odd number.")
    document.writeln(num + " is odd number.");

}

//activity3 - check student pass or fail
let marks = 40;
if(marks >= 35){
    console.log("Pass");
    document.writeln("Pass")
}
else{
    console.log("Fail");
    document.writeln("Fail")
}

//activity4 - print numbers
for(i = 1;i <= 10; i++){
    console.log(i);
    document.writeln(i)
}

//activity5
let a = 30;
b = a;
console.log(a,b);
document.writeln(a,b)
a = 200;
console.log(a,b)
document.writeln(a,b)


 