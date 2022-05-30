// copying it for the case i will need it
{/* <script src="https://cdn.socket.io/4.5.0/socket.io.min.js" integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k" crossorigin="anonymous"></script> */ }

import express from "express";
import cors from 'cors'
import { adminsRouter } from "./controllers/admin-controller.js";
import { usersRouter } from './controllers/users-controller.js';
import { tripsRouter } from './controllers/trips-controller.js'
// import { Server } from "socket.io";
// const io = new Server(3000)

const app = express();

app.use(express.json())
app.use(cors());

app.use('/api', adminsRouter)
app.use('/api', usersRouter)
app.use('/api', tripsRouter)

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

app.listen(5001, () => {
    console.log('Server started on port 5001');
})

