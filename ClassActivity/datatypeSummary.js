/*
symbol is used for unique id

Q.JS is dymanic or static?

*/
const anotherId = Symbol("123")
console.log(anotherId)
console.log(typeof(anotherId))

const id = 123
console.log(id === anotherId)

//Array
const num = [1,2,3,4,5,6]
const fruit = ['Apple','Mango','Grapes','Chiku']
console.log(num)
console.log(fruit)

//Objects - key-value pair
const obj = {
    name : 'Neha',
    age : 21
}
console.log(obj.name,obj.age)

//Functions
//Q.function declaration,definition and calling

const printname = function (){
    console.log("Neha")
}
printname()


