import * as React from 'react';
import '../Main.css';
import './home.css';

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
import CardHeader from '@mui/material/CardHeader';
import { Grid } from '@material-ui/core/';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';


import Badge from '@mui/material/Badge';
import { useState } from 'react';

const Home = (props) => {
    const navigate = useNavigate();
    console.log("home-page")

    const hadleFollowButton = () => {

        let body = {
            ...user,
            user
        }

        fetch('http://localhost:5000/api/trips',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data posted:')
                console.log(data)
            })
            .catch(err => {
                console.log('err')
                console.log(err)
            })

    }


    let user = sessionStorage.getItem("user")
    let adminIsLoged = sessionStorage.getItem("adminPermissions")
    let userIsLoged = sessionStorage.getItem("isRegistered")
    if (!adminIsLoged && !userIsLoged) {
        navigate('/login');
    }
    let trips = props.trips

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
            <div className='home-background' style={{ background: '#afcadb' }}>
                {/* <br /> */}
                {/* <CardHeader>our trips</CardHeader> */}
                <Paper
                    style={{ background: '#8ebdaf' }}
                    elevation={10}
                    className='center'
                // variant='outlined'
                >

                    {/* <Stack direction="row" className='center'> */}
                    <Typography variant="h4" color="primary" component="div" style={{ background: '' }}>
                        our trips
                    </Typography>
                    {/* </Stack> */}
                </Paper>
                <Grid container>
                    {
                        trips.map((trip) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={trip.tripID}
                                    id={`${trip.destination}trip-card`}
                                >
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
                                                onClick={hadleFollowButton}
                                            >
                                                <Badge badgeContent={trip.numOfFolowers} color="error">
                                                    {/* {follow ? < FavoriteIcon /> : < FavoriteBorderIcon />} */}
                                                    < FavoriteIcon />
                                                </Badge>
                                            </IconButton>
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

export default Home;

{/* <Button size="small">Share</Button>
 <Button size="small">Learn More</Button> */}

{/* <img
    key={trip.tripID}
    // src={trip.destination}
    // src={trips[index].destination}
    style={{ height: 100, width: 100 }}
    src={require(`../uploads/${trip.destination}.jpg`)}
    // src={`${require}(../uploads/${trip.destination}.jpg).default`}
    alt="error loading pic"
/>  */}


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


// {/* <Card sx={{ maxWidth: 345 }}
// key={trip.tripID}
// >
// <CardHeader
//     avatar={
//         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             {/* optional - make a random trip symbole */}
//             {trip.destination.substring(1, 0)}
//         </Avatar>
//     }
//     action={
//         <IconButton aria-label="settings">
//             <MoreVertIcon />
//         </IconButton>
//     }
//     title={trip.destination}
//     subheader={trip.date}
// />
// {/* <CardMedia
//     component="img"
//     height="194"
//     // image={`${require}(../uploads/${trip.destination}.jpg).default`}
//     image={require(`../uploads/${trip.destination}.jpg`)}
//     alt="Paella dish"
// /> */}
// <img
//     key={trip.tripID}
//     // src={trip.destination}
//     // src={trips[index].destination}
//     src={require(`../uploads/${trip.destination}.jpg`)}
//     // src={`${require}(../uploads/${trip.destination}.jpg).default`}
//     alt="error loading pic"
// />
// <CardContent>
//     <Typography variant="body2" color="text.secondary">
//         This impressive paella is a perfect party dish and a fun meal to cook
//         together with your guests. Add 1 cup of frozen peas along with the mussels,
//         if you like.
//     </Typography>
// </CardContent>
// <CardActions disableSpacing>
//     <IconButton aria-label="add to favorites">
//         <FavoriteIcon />
//     </IconButton>
//     <IconButton aria-label="share">
//         <ShareIcon />
//     </IconButton>
//     <ExpandMore
//         expand={expanded}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more"
//     >
//         <ExpandMoreIcon />
//     </ExpandMore>
// </CardActions>
// <Collapse in={expanded} timeout="auto" unmountOnExit>
//     <CardContent>
//         <Typography paragraph>Method:</Typography>
//         <Typography paragraph>

//         </Typography>

//     </CardContent>
// </Collapse>
// </Card>
//  */}


// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));


// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         padding: theme.spacing(2)
//     }
// }))

// setUsers(users => [...users, newUser])
// console.log("users after setting them:" + users)
// setNewUser({
//     firstName: '',
//     lastName: '',
//     userName: '',
//     password: ''
// })