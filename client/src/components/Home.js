import '../Main.css';
import LogIn from './LogIn.js';
import Trip from './Trip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { Grid } from '@material-ui/core/';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    let trips = props.trips;

    let user = sessionStorage.getItem("user")
    let adminIsLoged = sessionStorage.getItem("adminPermissions")
    let userIsLoged = sessionStorage.getItem("isRegistered")

    localStorage.setItem("userFollows", [])
    let flwStorage = [];



    //Redirects user who changed the URL while not loged-in
    if (!adminIsLoged && !userIsLoged) {
        navigate('/login');
    }

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
                                <>
                                    < Trip
                                        trip={trip} key={trip.tripID}
                                        flwStorage={flwStorage}
                                    // setFlwStorage={setFlwStorage}
                                    ></Trip>
                                </>
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