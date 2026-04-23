const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

// REGISTER TO EVENT
router.post('/register-to-event', (req, res) => {
    const { email, eventId } = req.body

    console.log("Checking:", email, eventId)

    const checkSql = `SELECT * FROM participants WHERE email=? AND event_id=?`

    pool.query(checkSql, [email, eventId], (err, result1) => {

        if (result1.length > 0) {
            return res.json({
                status: "error",
                message: "You already registered for this event"
            })
        }

        const insertSql = `
            INSERT INTO participants(email,event_id)
            VALUES (?,?)
        `

        pool.query(insertSql, [email, eventId], (err, result2) => {
            res.json({
                status: "success",
                message: "Registered Successfully"
            })
        })
    })
})


// GET MY EVENTS
router.get('/my-events', (req, res) => {
    const { email } = req.query

    const sql = `
        SELECT e.*
        FROM events e
        JOIN participants p ON e.event_id = p.event_id
        WHERE p.email=?
    `

    pool.query(sql, [email], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router