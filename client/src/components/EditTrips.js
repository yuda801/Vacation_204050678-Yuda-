

import * as React from 'react';
import '../Main.css';
// import './home.css';
import LogIn from './LogIn.js';
import { useNavigate } from "react-router-dom";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core/';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import Badge from '@mui/material/Badge';
import { useState } from 'react';

const EditTrips = (props) => {
    let navigate = useNavigate();
    let adminUserName = sessionStorage.getItem("adminName");
    const [follow, setFollow] = useState(false)
    console.log("EditTrips-page")

    let isAdmin = sessionStorage.getItem("admin")
    if (!isAdmin) {
        navigate('/login')
    }
    let trips = props.trips;

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
                            hello {adminUserName}!
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className='EditTrips-background' style={{ background: '#afcadb' }}>
                <Paper
                    style={{ background: '#8ebdaf' }}
                    elevation={10}
                    className='center'
                // variant='outlined'
                >
                    <Typography variant="h2" color="primary" component="div" style={{}}>
                        MANAGE TRIPS
                    </Typography>
                </Paper>
                <Grid container>
                    {
                        trips.map((trip) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={trip.tripID} >
                                    <Card sx={{ maxWidth: 345, m: 2 }}>
                                        <CardMedia
                                            component="img"
                                            alt="error loading picture"
                                            height="140"
                                            image={require(`../uploads/${trip.destination}.jpg`)}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" style={{ float: "left" }} component="div">
                                                {trip.destination}
                                            </Typography>
                                            <Typography variant="h5" color="secondary" style={{ float: "right" }}>
                                                {trip.date}
                                            </Typography>
                                            <br /><br />
                                            <Typography variant="body2" color="primary">
                                                {trip.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton
                                                size="large" color="inherit"
                                            // onClick={}
                                            >
                                                <Badge badgeContent={4} color="error">
                                                    {follow ? < FavoriteIcon /> : < FavoriteBorderIcon />}
                                                </Badge>
                                            </IconButton>
                                            <Button size="small">
                                                <DeleteForeverIcon />
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>

            </div >
        </>
    )
}

export default EditTrips;