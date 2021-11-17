const router = require("express").Router();
const { createNewNote, deleteNote } = require('../../lib/note')
let noteData = require('../../db/db.json');
const uniqueid = require('uniqid');



router.get('/notes', (req, res) => {
    res.json(noteData)
})

router.post('/notes', (req, res) => {
    req.body.id = uniqueid()
    const note = createNewNote(req.body, noteData)
    res.json(note)
})

router.delete('/notes/:id', (req, res) => {
    let selectedId = req.params.id
    const arrayWithoutDeletedItem = noteData.filter((note) => note.id !== selectedId)
    
    deleteNote(arrayWithoutDeletedItem);

    // deletes the old database import and then re-requires it to get the updated list with removed item
    delete require.cache[require.resolve('../../db/db.json')]
    noteData = require('../../db/db.json');
    // sends updated list with removed item
    res.json(noteData)
})

module.exports = router