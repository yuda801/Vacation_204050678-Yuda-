import express from "express";
import cors from 'cors'
import { adminsRouter } from "./controllers/admin-controller.js";
import { usersRouter } from './controllers/users-controller.js';
import { tripsRouter } from './controllers/trips-controller.js'
const app = express();

app.use(express.json())
app.use(cors())

app.use('/api', adminsRouter)
app.use('/api', usersRouter)
app.use('/api', tripsRouter)

app.listen(5000, () => {
    console.log('Server started on port 5000');
})