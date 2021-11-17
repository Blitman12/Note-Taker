const router = require("express").Router();
const createNewNote = require('../../lib/note')
const noteData = require('../../db/db.json');


router.get('/notes', (req, res) => {
    res.json(noteData)
})

router.post('/notes', (req, res) => {
    req.body.id = noteData.length.toString()
    const note = createNewNote(req.body, noteData)
    res.json(note)
})

module.exports = router