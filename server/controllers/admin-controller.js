import express from 'express';
import { getAll } from '../buissness-logic/admins-bl.js';
const adminsRouter = express.Router();

adminsRouter.get('/admin', async (_, res) => {
    let result = await getAll();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    adminsRouter
}