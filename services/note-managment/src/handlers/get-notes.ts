import { Request, Response } from 'express'
import Note from '../models/note';
import HttpStatusCodes from 'http-status-codes'

export const getNotes = async (req: Request, res: Response) => {

  const notes = await Note.find({})
  console.log('get notes')
  if (!notes) {
    res.status(HttpStatusCodes.NOT_FOUND).json({message: 'Not found'})
  }

  res.status(HttpStatusCodes.OK).json(notes)
}