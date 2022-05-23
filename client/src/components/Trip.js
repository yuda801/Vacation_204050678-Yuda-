
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import * as React from 'react';
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';

//idea - insteda of a full page for admin, i can just add a conditionally
//delete icon that apears when admin is loged in

// //writing this function becouse states do not update till function ends running
// const setStorage = (arr) => {
//     localStorage.setItem("userFollows", arr);
//     console.log(arr)
// }

const Trip = (props) => {

    let { trip } = props;
    let { flwStorage } = props;
    let { setFlwStorage } = props;
    const [follow, setFollow] = useState(false);
    let userFollows = localStorage.getItem("userFollows")
    console.log(userFollows)
    // let follows = flwStorage.some(trp => trp === flwStorage.destination)
    let follows = userFollows.includes(trip.destination);
    console.log(follows)
    // if (follows) setFollow(true);

    const hadleFollowButtonClick = () => {
        //if user starts following
        if (!follow) {
            console.log("if user starts following")
            if (!flwStorage.includes(trip.destination)) {
                flwStorage.push(trip.destination);
            }
            console.log(flwStorage)
            // setFlwStorage(flwStorage)
            // setStorage(flwStorage)
            localStorage.setItem("userFollows", flwStorage);
            trip.numOfFolowers++;
            setFollow(true);
        }

        //if user stops following
        if (follow) {
            console.log("if user stops following")
            let filterd = flwStorage.filter(trp => trp !== trip.destination);
            console.log(filterd)
            flwStorage = filterd.slice();
            console.log(flwStorage)
            // setStorage(filterd)
            localStorage.setItem("userFollows", filterd);
            trip.numOfFolowers--;
            setFollow(false);
        }

        let newTrip = {
            description: trip.description,
            destination: trip.destination,
            date: trip.date,
            price: trip.price,
            numOfFolowers: trip.numOfFolowers
        }

        fetch(`http://localhost:5001/api/trips/${trip.tripID}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTrip)
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

    return (
        < Grid
            item xs={12} sm={6} md={4} key={trip.tripID}
        // id = {`${trip.destination}trip-card`
        >
            < Card sx={{ maxWidth: 345, m: 2 }}>
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
                    <Typography variant="h5" color="green">
                        {trip.price}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="primary">
                        {trip.description}
                    </Typography>

                </CardContent>
                <CardActions>
                    <IconButton
                        size="large" color="inherit"
                        onClick={() => hadleFollowButtonClick()}
                    >
                        <Badge badgeContent={trip.numOfFolowers} color="error">
                            {follow ? < FavoriteIcon /> : < FavoriteBorderIcon />}
                        </Badge>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid >
    )
}

export default Trip