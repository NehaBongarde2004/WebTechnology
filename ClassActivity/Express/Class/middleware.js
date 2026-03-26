const express = require('express')
const app = express()
const port = 3000


// function checkRoute(req,res,next){
//     console.log(req.url);
//     next();
// }
// app.use(checkRoute)

// app.get('/', (req, res) => {
//   res.send('Welcome to Home page');
// })

// app.get('/about', (req, res) => {
//   res.send('About page');
// })

// app.get('/contact', (req, res) => {
//   res.send('contact page');
// })

app.use((req,res,next)=>{
    console.log("Data recevied",new Date());
    next();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

