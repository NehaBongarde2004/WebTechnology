const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

// REGISTER USER
router.post('/register', (req, res) => {
    const { name, email, password } = req.body

    const sql = `INSERT INTO users(name, email, password) VALUES (?,?,?)`

    pool.query(sql, [name, email, password], (err, data) => {
        res.send(result.createResult(err, data))
    })
})

// LOGIN USER
router.post('/login', (req, res) => {
    const { email, password } = req.body

    const sql = `SELECT * FROM users WHERE email=? AND password=?`

    pool.query(sql, [email, password], (err, data) => {
        if (data.length > 0) {
            res.send({ status: "success", message: "Login success" })
        } else {
            res.send({ status: "error", message: "Invalid credentials" })
        }
    })
})

module.exports = router