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

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));


//   const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };


const Home = (props) => {
    const [expanded, setExpanded] = React.useState(false);
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
                            <>
                                <img
                                    key={trip.tripID}
                                    // src={trip.destination}
                                    // src={trips[index].destination}
                                    src={require(`../uploads/${trip.destination}.jpg`)}
                                    // src={`${require}(../uploads/${trip.destination}.jpg).default`}
                                    alt="error loading pic"
                                />
                                <Card sx={{ maxWidth: 345 }}
                                    key={trip.tripID}
                                >
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title="Shrimp and Chorizo Paella"
                                        subheader="September 14, 2016"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image="/static/images/cards/paella.jpg"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            This impressive paella is a perfect party dish and a fun meal to cook
                                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                                            if you like.
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        {/* <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        > */}
                                        <ExpandMoreIcon />
                                        {/* </ExpandMore> */}
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph>Method:</Typography>
                                            <Typography paragraph>
                                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                                aside for 10 minutes.
                                            </Typography>
                                            <Typography paragraph>
                                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                                stirring often until thickened and fragrant, about 10 minutes. Add
                                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                            </Typography>
                                            <Typography paragraph>
                                                Add rice and stir very gently to distribute. Top with artichokes and
                                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                                mussels, tucking them down into the rice, and cook again without
                                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                                minutes more. (Discard any mussels that don&apos;t open.)
                                            </Typography>
                                            <Typography>
                                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                                            </Typography>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </>
                        )
                    })
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

