/*
Handling request and response - 
Express application handles http request and response

Request - the request object contain information about the client request
ex-url,headers,query parameters,request body

app.get('/user',(req,res)=>{
    console.log(req.query.name)
})

/user?name=Neha

Activity - 
1.detail study of query parameter wih3,4 ex with real ex
2.where use in company level

Response - the response object sends data back to the cliet
common methods -
-res.send()
-res.json()
-res.status()
-res.sendFile()

app.get('/student',(req,res)=>{
    res.json({
        name:"Neha",
        course:"AIML"
        });
    });
});

o/p -> {
        "name":"Neha",
        "course":"AIML"
        }

app.get('/search', (req, res) => {
  const name = req.query.name;
  res.send(`Search for ${name}`);
});


URL :- /search?name=Job

*/