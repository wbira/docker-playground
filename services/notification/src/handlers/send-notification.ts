import { Request, Response } from 'express'

export const sendNotification = (req: Request, res: Response) => {
  console.log("Send notification!!!\n\n\n");
  console.log(req)
  res.send({ messege: "Send notifications\n", body: req.body })
}