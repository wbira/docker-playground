import { Request, Response } from 'express'

export const createNote = (req: Request, res: Response) => {
  console.log("Note created!!!\n\n\n");
  console.log(req)
  res.send(req.body)
}