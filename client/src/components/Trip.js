
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

const Trip = (props) => {

    let { trip } = props;
    const [follow, setFollow] = useState(false);
    let userFollows = []
    userFollows.push(localStorage.getItem("userFollows"))
    console.log(`list is: ${userFollows}`)
    let follows = userFollows.includes(trip.destination);
    console.log("follows: " + follows)
    console.log("follow: " + follow)

    const hadleFollowButtonClick = () => {

        //if user starts following
        if (!follow) {
            console.log("if user starts following")
            // if (!userFollows.includes(trip.destination)) {
            // userFollows.push(trip.destination);
            // }
            // console.log(userFollows)
            let local = []
            local.push(trip.destination)
            local.push(localStorage.getItem("userFollows"))
            localStorage.setItem("userFollows", JSON.stringify(local));
            console.log("added: " + local)
            trip.numOfFolowers++;
            setFollow(true);
            let lcl = localStorage.getItem("userFollows")
            console.log("lcl is: ", lcl)
        }

        //if user stops following
        if (follow) {
            console.log("if user stops following")
            let filterd = []
            filterd.push(localStorage.getItem("userFollows"))
            filterd = userFollows.filter(trp => trp !== trip.destination);
            // console.log(filterd)
            // userFollows = filterd.slice();
            // console.log(userFollows)
            localStorage.setItem("userFollows", filterd);
            trip.numOfFolowers--;
            setFollow(false);
        }

        // let newTrip = {
        //     description: trip.description,
        //     destination: trip.destination,
        //     date: trip.date,
        //     price: trip.price,
        //     numOfFolowers: trip.numOfFolowers
        // }

        // fetch(`http://localhost:5001/api/trips/${trip.tripID}`,
        //     {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(newTrip)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('data posted:')
        //         console.log(data)
        //     })
        //     .catch(err => {
        //         console.log('err')
        //         console.log(err)
        //     })
    }

    return (
        < Grid
            item xs={12} sm={6} md={4} key={trip.tripID}
        // id = {`${trip.destination}trip-card`
        >
            {/* {console.log("flwStorage: " + flwStorage)} */}
            {/* {console.log("follows" + follows)} */}
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
                            {(follows || follow) ? < FavoriteIcon /> : < FavoriteBorderIcon />}
                        </Badge>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid >
    )
}

export default Trip