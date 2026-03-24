const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Welcome to about page')
})

app.get('/exam', (req, res) => {
  res.send('Exam page')
})

app.get('/schedule', (req, res) => {
  res.send('schedule page')
})

app.get('/contact', (req, res) => {
  res.send('Contact page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})