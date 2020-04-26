import express from 'express'
import { Request, Response } from 'express'

const PORT = 8080
const HOST = '0.0.0.0'
const server = express()

server.get('/', (req: Request, res: Response) => {
  res.send('Product service')
})

server.listen(PORT, HOST)
console.log(`Running server on http://${HOST}:${PORT}`)
