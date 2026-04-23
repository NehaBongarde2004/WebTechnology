const express = require("express")
const app = express()
const port = 3000

const userData = [
    { id: 1, name: "Neha Bongarde", role: "Backend Developer", skills: ["Node.js", "Java", "SQL"] },
    { id: 2, name: "Rohit Sharma", role: "Frontend Developer", skills: ["React", "CSS", "JavaScript"] },
    { id: 3, name: "Priya Patel", role: "Full Stack Developer", skills: ["MERN Stack", "MongoDB"] },
    { id: 4, name: "Aman Verma", role: "DevOps Engineer", skills: ["Docker", "AWS", "CI/CD"] }
]

//Middleware (Improved Logging)
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`)
    next()
})

//Home Route (Professional API Message)
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to User Management API",
        endpoints: ["/user", "/user/:id"],
        status: "Running"
    })
})

//Get All Users
app.get("/user", (req, res) => {
    res.json({
        totalUsers: userData.length,
        data: userData
    })
})

//Get User by ID (Improved Response)
app.get("/user/:id", (req, res) => {
    const user_id = parseInt(req.params.id)

    const userInfo = userData.find(user => user.id === user_id)

    if (userInfo) {
        res.json({
            success: true,
            user: userInfo
        })
    } else {
        res.status(404).json({
            success: false,
            message: "User not found "
        })
    }
})

app.listen(port, () => console.log(` Server Started on http://localhost:${port}`))