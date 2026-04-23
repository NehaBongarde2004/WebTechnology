/*
template engine allow engineer to develop to generate dynamic html page using data from the server

instead of static html,pages are created dynamically

popular dynamic template
-EJS
-PUG
-handle bars

they help in dynamic contain code reuseability

steps - 
1.npm install ejs
2.create server.js


Activities -
-do steps mentioned in notes
-what is static files
-what is express routers
-flow of complete express application

use express for backend to final JS projects

*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { name: "Neha" });
});

app.listen(3000);