import express from 'express'
import { Response } from 'express'
import router from './routes/notification-routes'

const app = express()

app.use(express.json())
app.use('/notification', router, (_, response: Response) => response.sendStatus(401))

export default app;
