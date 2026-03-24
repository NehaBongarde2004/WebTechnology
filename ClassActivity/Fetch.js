/*
Fetch - it is bulding JS method use to make http request
fetch method return promises
syntax - fetch('url')

*/
fetch("https://jsonplaceholder.typicode.com/users").then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data)   
})
.catch((error) => {
    console.log(error)
})
/*
1.
2.asyn await ex wih fetch method
3.fetch user  display name in html list
4.fetch post show only 1st 5 record
5.create a fake promise manually resolve after 3 sec reject after 3 sec

what is promise in js
what is state in promises
diff betw promises and callback
what is fetch method in js
what does fetch return
why do we use response.json
diff betn then and catch
diff asyn and await
what is promise chain
*/