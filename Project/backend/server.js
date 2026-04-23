const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/admin', require('./routes/admin'))
app.use('/participant', require('./routes/participant'))
app.use('/user', require('./routes/user'))

app.listen(3000, () => {
    console.log("Server running on 3000")
})