import express from 'express'
import { sendNotification } from '../handlers/send-notification';
import { fetchNotifications } from '../handlers/fetch-notifications';

const router = express.Router()

router.get('/', fetchNotifications)
router.post('/', sendNotification)

export default router
