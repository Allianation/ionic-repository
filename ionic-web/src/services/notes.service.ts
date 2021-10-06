import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';

@Injectable()
export class NotesService {

    constructor(public afDB: AngularFireDatabase) {
       
    }

    notes = []

    public getNotes() {
        //return this.notes;
        return this.afDB.list('notes/');
    }

    public getNote(id) {
        //return this.notes.filter((note) => note.id === id);
        return this.afDB.object('notes/' + id);
    }

    public addNote(note) {
        //this.notes.push(note);
        this.afDB.app.database().ref('notes/' + note.id).set(note);
    }

    public editNote(note) {
        //const index = this.notes.findIndex((item) => item.id === note.id);
        //this.notes[index] = note;
        this.afDB.app.database().ref('notes/' + note.id).set(note);
    }

    public deleteNote(note) {
        //const index = this.notes.findIndex((item) => item.id === note.id);
        //this.notes.splice(index, 1);
        this.afDB.app.database().ref('notes/' + note.id).remove();
    }

}

