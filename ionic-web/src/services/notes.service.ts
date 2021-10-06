import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

    notes = [
        { id: 1, title: 'Nota 1', description: 'Descripcion nota 1' },
        { id: 2, title: 'Nota 2', description: 'Descripcion nota 2' },
        { id: 3, title: 'Nota 3', description: 'Descripcion nota 3' },
    ]

    public getNotes() {
        return this.notes;
    }

    public getNote(id) {
        return this.notes.filter((note) => note.id === id);
    }

    public addNote(note) {
        this.notes.push(note);
    }

    public editNote(note) {
        const index = this.notes.findIndex((item) => item.id === note.id);
        this.notes[index] = note;
    }

    public deleteNote(note) {
        const index = this.notes.findIndex((item) => item.id === note.id);
        this.notes.splice(index, 1);
    }

}

