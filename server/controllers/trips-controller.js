import express from 'express';
import { getAllTrips, addTrip, deleteTrip, updateTrip } from '../buissness-logic/trips-bl.js';
const tripsRouter = express.Router();

tripsRouter.get('/trips', async (_, res) => {
    let result = await getAllTrips();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

tripsRouter.post('/trips', async (req, res) => {
    let result = await addTrip(req.body);
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

tripsRouter.delete('/trips/:id', async (req, res) => {
    let result = await deleteTrip(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})


tripsRouter.put('/trips/:id', async (req, res) => {
    let result = await updateTrip(req.params.id, req.body);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    tripsRouter
}
