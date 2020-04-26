import { Request, Response } from 'express'

export const createNote = (req: Request, res: Response) => {
  res.send(req.body)
}