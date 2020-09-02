import { Request, Response } from 'express'
import Note from '../models/note';
import HttpStatusCodes from 'http-status-codes'

export const getNote = async (req: Request, res: Response) => {
  const noteId = req.params.id;
  console.log(`Note id ${noteId}\n`)
  const note = await Note.findOne( { noteId })

  if (!note) {
    res.status(HttpStatusCodes.NOT_FOUND).json({message: 'Not found'})
  }

  res.status(HttpStatusCodes.OK).json(note)
}