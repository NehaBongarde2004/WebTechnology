const express = require('express');   
const app = express();                
const PORT = 3000;                   

app.use((req, res, next) => {
    console.log("Request received from client");
    next(); 
    next(2);
});

app.get('/', (req, res) => {
    res.send("Hello , Welcome to my first Express Server");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.get('/contact', (req, res) => {
    res.send("This is contact page");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});