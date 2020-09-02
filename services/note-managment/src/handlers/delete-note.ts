import { Request, Response } from 'express'
import Note from '../models/note';
import HttpStatusCodes from 'http-status-codes'

export const deleteNote = async (req: Request, res: Response) => {
    const noteId = req.params.id;
    try {
        const err = await Note.deleteOne({ noteId })
        if (err) {
            res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err)
        }
        res.status(HttpStatusCodes.NO_CONTENT).json({})    
    } catch (error) {
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(error)
        
    }

}