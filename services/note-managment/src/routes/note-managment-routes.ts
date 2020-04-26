import express from 'express'
import { createNote } from './../handlers/create-note';
import { getNote } from '../handlers/get-note';

const router = express.Router()

router.get('/', getNote)
router.post('/', createNote)

export default router
