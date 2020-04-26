import { Request, Response } from 'express'

export const getNote = (req: Request, res: Response) => {
  res.send({ messege: "Get handler" })
}