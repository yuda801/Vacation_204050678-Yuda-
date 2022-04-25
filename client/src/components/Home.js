import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import * as React from 'react';

import '../Main.css'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));





const Home = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
            <div>

                <Typography variant="h2" color="primary" component="div">
                    Our Trips
                </Typography>

                {
                    trips.map((trip) => {
                        return (
                            <div className='' style={{ display: 'flex' }} key={trip.tripID}>

                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="error loading picture"
                                        height="140"
                                        image={require(`../uploads/${trip.destination}.jpg`)}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {trip.destination}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {trip.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>


                            </div>
                        )
                    })
                }

            </div >
        </>
    )
}

export default Home;

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
