import { Request, Response } from 'express'
import HttpStatusCodes from 'http-status-codes'
import Note from '../models/note'

export const updateNote = async (req: Request, res: Response) => {
    const noteId = req.params.id
    console.log(`Note id ${noteId}\n`)
    const { author, text } = req.body
    try {
        const updatedNote = await Note.findOneAndUpdate({noteId}, { author, text });
        res.status(HttpStatusCodes.OK).json({
            noteId,
            author,
            text,
            updatedNote
        })
    } catch (err) {
        console.log(err, noteId, author, text)
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message: "internal server error" })
    }
}