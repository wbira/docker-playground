import express from 'express'
import { createNote } from './../handlers/create-note';
import { getNote } from '../handlers/get-note';
import { getNotes } from '../handlers/get-notes';
import { updateNote } from '../handlers/update-note';
import { deleteNote } from '../handlers/delete-note';

const router = express.Router()


router.get('/:id', getNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);
router.post('/', createNote);
router.get('/', getNotes);

export default router
