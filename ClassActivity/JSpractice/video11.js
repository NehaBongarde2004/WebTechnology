/*
Classes & Ojects-

Prototype in JS - 
A JS object is an entity having state and behaviour
JS objects have a special property called prototype(object inside object)
we can set prototype __proto__

If object & prototype have same method,object's method will be used.


Classes in JS -
Class is a program-code template for creating objects.
those objects will have some state(variable) & some behaviour(function) inside it.
class MyClass{
    constructor(){...}
    myMethod(){...}
}
let myObj = new MyClass();



*/
class Car{
    constructor(){
        console.log("Creating new object");
    }
    start(){
        console.log("start");    
    }
    stop(){
        console.log("stop");    
    }
}
let myObj = new Car();
myObj.start();
myObj.stop();

class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    work(){
        console.log("Work");
    }
}
let eng = new Engineer();
eng.eat();
eng.work();
/*
Inheritance in JS-
If child and parent have same method ,child's method will be used.
*/

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Name:"+this.name +" Email:"+this.email);
    }
}
let student1 = new User("Neha","neha@gmail.com");
student1.viewData();
