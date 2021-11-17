const fs = require('fs')
const {createNewNote} = require('../lib/note');
const notes = require('../db/db.json');

const mockData = [
    {
        title: "Note",
        text: "FirstNote",
        id: "ih2z8uwkw3sx7fi"
    },
    {
        title: "Note2",
        text: "SecondNote",
        id: "ih2z8uwkw3sx879"
    }
]

test('Tests to ensure each note has a: title, text and id', () => {
    const note = mockData[0];
    const note2 = mockData[1];

    expect(note.title).toBe("Note")
    expect(note.text).toBe("FirstNote")
    expect(note.id).toBe("ih2z8uwkw3sx7fi")

    expect(note2.title).toBe("Note2")
    expect(note2.text).toBe("SecondNote")
    expect(note2.id).toBe("ih2z8uwkw3sx879")
});


jest.mock('fs')
test('Creates a new note', () => {
    const note = {
        title: 'Look a title',
        text: 'Look some text'
    }
    const newNote = createNewNote(note, notes)
    expect(newNote.title).toBe('Look a title')
    expect(newNote.text).toBe('Look some text')
})

