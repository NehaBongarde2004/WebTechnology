/*const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Welcome to Home page');
})

app.get('/about', (req, res) => {
  res.send('This is about page');
})

app.get('/projects', (req, res) => {
  res.send('This is project page');
})

app.get('/contact', (req, res) => {
  res.send('Contact page');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

*/


const express = require('express')
const app = express()
const port = 3000

const exams = ["Math", "Science", "English", "History"];


app.get('/', (req, res) => {
  const time = new Date().getHours();
  let message;
  if(time<12){
    message = "Good Morning";
  }else if(time < 18){
    message = "Good Afternoon";
  }else{
    message = "Good Evening";
  }
  res.send(`${message},Welcome to exam portal`);
})

app.get('/about', (req, res) => {
  const feature = ["Exam schedule","Results","Notifications"];
  const totalFeatures = feature.length;

  res.send(`
    <h2>About Exam System</h2>
    <p>This system helps students manage their exams easily.</p>
    <p>Total Feature: ${totalFeatures}</p>
    <p>Feature: ${feature.join(", ")}</p>
    `);
})

app.get('/exam', (req, res) => {
  res.send('Avaiable exams: '+exams.join(", "));
})

app.get('/exam/:id', (req, res) => {
  const id = req.params.id;
  if(id>=exams.length){
    return res.send("Exam not found");
  }
  res.send('Selected Exam: '+exams[id]);
})

app.get('/schedule', (req, res) => {
  const schedule = {
    Monday: "Math",
    Tuesday: "Science",
    Wednesday: "English"
  };

  res.json(schedule);
})

app.get('/contact', (req, res) => {

  const name = req.query.name || "Guest";

  const hour = new Date().getHours();
  let status;

  if(hour>=9 && hour<=17){
    status = "We are available";
  }else{
    status = "We are currently not available";
  }

  const contacts = {
    email : "support@examportal.com",
    phone : "1234567890"
  }
  res.send(`
    <h2>Contact Page</h2>
    <p>Hello, ${name}</p>
    <p>Status: ${status}</p>
    <p>Email: ${contacts.email}</p>
    <p>Phone: ${contacts.phone}</p>
    `);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})