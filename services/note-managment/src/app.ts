import express from 'express'
import { Response } from 'express'
import router from './routes/note-managment-routes'
import connectDB from './db/database'

const app = express()

//Create mongo connection
connectDB()

app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.baseUrl, req.path, req.params)

    console.log('I run on every request!');
    next();
  })
app.use('/', router)

export default app;
