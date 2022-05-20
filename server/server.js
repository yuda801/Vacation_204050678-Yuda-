import express from "express";
import cors from 'cors'
import { adminsRouter } from "./controllers/admin-controller.js";
import { usersRouter } from './controllers/users-controller.js';
import { tripsRouter } from './controllers/trips-controller.js'
const app = express();

app.use(express.json())

app.use(cors());

app.use('/api', adminsRouter)
app.use('/api', usersRouter)
app.use('/api', tripsRouter)

app.listen(5001, () => {
    console.log('Server started on port 5001');
})





// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
//     res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");
//     next();
// });



// const corsOptions = {
//     origin: "*", methods:
//         "GET,HEAD,PUT,PATCH,POST,DELETE", allowedHeaders:
//         "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token", credentials: true, preflightContinue: false,
//     optionsSuccessStatus: 204
// };

// app.use(cors(corsOptions));