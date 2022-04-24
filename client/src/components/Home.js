import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../Main.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardTravelIcon from '@mui/icons-material/CardTravel';

// import '../uploads/London.jpg';
// import '../uploads/Rome.jpg';
// import '../uploads/Paris.jpg'
// import '../uploads/CapeTown.jpg'
// import '../uploads/BuenosAires.jpg'
// import '../uploads/Berlin.jpg'
// import '../uploads/Bangkok.jpg'
// import '../uploads/Wellington.jpg'
// import '../uploads/WashingtonDC.jpg'
// import '../uploads/Tokyo.jpg'

// import London from '../uploads/London.jpg';
// import Rome from '../uploads/Rome.jpg';
// import Paris from '../uploads/Paris.jpg'
// import CapeTown from '../uploads/CapeTown.jpg'
// import BuenosAires from '../uploads/BuenosAires.jpg'
// import Berlin from '../uploads/Berlin.jpg'
// import Bangkok from '../uploads/Bangkok.jpg'
// import Wellington from '../uploads/Wellington.jpg'
// import WashingtonDC from '../uploads/WashingtonDC.jpg'
// import Tokyo from '../uploads/Tokyo.jpg'

const Home = (props) => {
    console.log("home-page")

    let navigate = useNavigate();

    let user = sessionStorage.getItem("user")
    let trips = props.trips
    // if (isLogedIn) {
    //     alert("you are already loged-in")
    //     //navigate('/home')
    // }

    console.log("start")
    console.log(trips)
    console.log("end")

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <CardTravelIcon />
                        <Typography
                            style={{ margin: 'auto' }}
                            variant="h6"
                            color="inherit"
                            component="div"
                        >
                            VACATION FINDER
                        </Typography>
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="div"
                        >
                            Hello {user}!
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id="register-form" className='background center' style={{ display: "flex" }}>

                <Typography variant="h2" color="primary" component="div">
                    Our Trips
                </Typography>

                {
                    trips.map((trip, index) => {
                        return (
                            <img
                                key={trip.tripID}
                                // src={trip.destination}
                                // src={trips[index].destination}
                                src={require(`../uploads/${trip.destination}.jpg`)}
                                // src={`${require}(../uploads/${trip.destination}.jpg).default`}
                                alt="error loading pic"
                            />
                        )
                    })
                }
                <div></div>
                {

                }
            </div >
        </>
    )
}

export default Home;

                    // trips.map((trip) => {
                    //     // console.log(trip.destination)
                    //     // let destination = trip.destination
                    //     return (
                    //         <>
                    //             {/* <img src={require('./logo.jpeg')} /> */}
                    //             < img
                    //                 key={trip.tripID}
                    //                 // src={trip.destination}
                    //                 src={destination}

                    //                 alt={"error loading"}
                    //             />
                    //         </>
                    //     )
                    // })