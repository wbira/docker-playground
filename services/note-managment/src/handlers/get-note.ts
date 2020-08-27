import { Request, Response } from 'express'

export const getNote = (req: Request, res: Response) => {
  console.log("Note created!!!\n\n\n");
  console.log(req)
  
  res.send({ messege: "Get handler" })
}