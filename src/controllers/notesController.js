import { Note } from '../models/note.js';

export const getNotes = async (req, res) => {
    const notes = await Note.find();
    res.status(200).json(notes);
};

export const getNoteById = async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);
    if (!note) {
        throw new Error('Note not found');
    }
    res.status(200).json(note);
};

export const createNote = async (req, res) => {
    const note = await Note.create(req.body);
    res.status(201).json(note);
};

export const updateNote = async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findOneAndUpdate(
        { _id: noteId },
        req.body,
        { returnDocument: "after" },
    );
    if (!note) {
        throw new Error('Note not found');
    }
    res.status(200).json(note);
};

export const deleteNote = async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findOneAndDelete(noteId);
    if (!note) {
        throw new Error('Note not found');
    }
    res.status(200).json(note);
};