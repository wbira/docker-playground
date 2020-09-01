import express from 'express'
import { Response } from 'express'
import router from './routes/note-managment-routes'
import connectDB from './db/database'

const app = express()

//Create mongo connection
connectDB()

app.use(express.json())
app.use('/', router, (_, response: Response) => response.sendStatus(401))

export default app;
