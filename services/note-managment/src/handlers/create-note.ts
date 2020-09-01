import { Request, Response } from 'express'
import Note from '../models/note';

export const createNote = async (req: Request, res: Response) => {
  console.log("Note created!!!\n\n\n");
  console.log(req)

  try {
    const note = new Note({
      author: "Dummy",
      date: Date.now(),
      text: "Some text"
    })
    const savedNote = await note.save()
    res.status(201).json(savedNote);
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error)
  }

}