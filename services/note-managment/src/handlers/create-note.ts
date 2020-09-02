import { Request, Response } from 'express'
import Note from '../models/note';
import HttpStatusCodes from 'http-status-codes'
import { v4 as uuidv4 } from 'uuid';

export const createNote = async (req: Request, res: Response) => {
  const { author, text } = req.body;
  console.log("Created")
  try {
    const note = new Note({
      noteId: uuidv4(),
      author,
      date: Date.now(),
      text
    })
    const savedNote = await note.save()
    res.status(HttpStatusCodes.CREATED).json(savedNote);
  } catch (error) {
    console.error(error.message)
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error)
  }

}