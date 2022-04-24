import express from 'express';
import { getAllUsers, addUser, deleteUser } from '../buissness-logic/users-bl.js';
const usersRouter = express.Router();

usersRouter.get('/users', async (_, res) => {
    let result = await getAllUsers();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

usersRouter.post('/users', async (req, res) => {
    let result = await addUser(req.body);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }
        res.send(result)
    }
})

usersRouter.delete('/users/:id', async (req, res) => {
    let result = await deleteUser(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    usersRouter
}