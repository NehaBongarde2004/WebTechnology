/*
fetch API - the fetch API provides an interface for fetching(sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource(data).
API - Application Programming Interface

let promise = fetch(url,[options])

JSON is JavaScript Object Notation




*/

let URL = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(URL);
console.log(promise);

const getData = async ()=>{    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
}
/*

*/
