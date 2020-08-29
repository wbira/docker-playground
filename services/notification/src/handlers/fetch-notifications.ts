import { Request, Response } from 'express'

export const fetchNotifications = (req: Request, res: Response) => {
  console.log("Notifications fetched!!!\n\n\n");
  console.log(req)
  
  res.send({ messege: "Fetch notifications" })
}