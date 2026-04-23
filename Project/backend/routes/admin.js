const express = require('express')
const pool = require('../db/pool')
const result = require('../utils/result')

const router = express.Router()

// GET ALL EVENTS
router.get('/all-events', (req, res) => {
    const sql = `SELECT * FROM events`

    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

// ADD EVENT
router.post('/add-event', (req, res) => {
    const { event_name, description, event_date, location, fees } = req.body;

    const sql = `
        INSERT INTO events (event_name, description, event_date, location, fees)
        VALUES (?, ?, ?, ?, ?)
    `;

    pool.query(sql, [event_name, description, event_date, location, fees], (err, data) => {
        if (err) {
            console.log(err)
            return res.send(result.createResult(err, null))
        }

        res.send(result.createResult(null, null, "Event added successfully"))
    })
})

// UPDATE EVENT
router.put('/update/:event_id', (req, res) => {
    const { event_id } = req.params
    const { event_name, description, event_date, location, fees } = req.body

    const sql = `
        UPDATE events SET
        event_name=?, description=?, event_date=?, location=?, fees=?
        WHERE event_id=?
    `

    pool.query(
        sql,
        [event_name, description, event_date, location, fees, event_id],
        (error, data) => {
            res.send(result.createResult(error, data))
        }
    )
})

// DELETE EVENT
router.delete('/delete/:event_id', (req, res) => {
    const eventId = req.params.event_id

    const deleteParticipants = `DELETE FROM participants WHERE event_id=?`

    pool.query(deleteParticipants, [eventId], (err1) => {

        if (err1) {
            return res.send(result.createResult(err1, null))
        }

        const deleteEvent = `DELETE FROM events WHERE event_id=?`

        pool.query(deleteEvent, [eventId], (err2, data) => {
            res.send(result.createResult(err2, data, "Event deleted successfully"))
        })
    })
})

module.exports = router