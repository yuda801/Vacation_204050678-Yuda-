import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate, Redirect } from "react-router-dom";

import '../Main.css'
import Register from './Register.js';
import Home from './Home.js';
import EditTrips from './EditTrips.js';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from "@mui/material/styles";
import LoginIcon from '@mui/icons-material/Login';



const StyleTextField = styled(TextField)({
    backgroundColor: "#fff",
});

const LogIn = (props) => {
    // console.log("log-in-page")
    let navigate = useNavigate();

    let isLogedIn = sessionStorage.getItem("isRegistered")

    //users = list of all users.  

    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    const handleInputChange = (e, name) => {
        let inputValue = e.target.value
        let tempNewMedicine = {
            ...user,
            [name]: inputValue
        }
        setUser(tempNewMedicine)
    }

    const hendleLogIn = (e) => {
        e.preventDefault()

        const users = props.users;
        const admin = props.admin;

        if (isLogedIn) {
            navigate('/home')
            alert("you are already loged-in")
        }

        let userName = user.userName
        let password = user.password

        //check if user entered userName and password
        if ((user.userName && user.password)) {
            console.log("all fields filled")

            let isRegistered = false
            let adminEntered = false;

            //check if admin
            if (userName === admin[0].userName && password === admin[0].password) {
                console.log("admin entered")
                adminEntered = true;
            }
            if (adminEntered) {
                sessionStorage.setItem("adminPermissions", true);
                sessionStorage.setItem("adminName", userName)
                navigate('/edittrips');
                return;
            }

            //check if registered
            for (let i = 0; i < users.length; i++) {
                if (users[i].userName === userName && users[i].password === password) {
                    isRegistered = true;
                    break;
                }
            }

            if (isRegistered) {
                console.log("is registered")
                sessionStorage.setItem("isRegistered", true)
                sessionStorage.setItem("user", userName)
                navigate('/home');
            }
            else {
                console.log("isRegistered === false")
                alert("wrong user name or password, please check again")
            }
        }
        else {
            console.log("didn't fill all info")
            alert("please enter your user name and password")
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <LoginIcon />
                        <Typography
                            style={{ margin: 'auto' }}
                            variant="h6"
                            color="inherit"
                            component="div"
                        >
                            VACATION FINDER
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div id="log-in-form" className='background center' style={{ display: "flex" }}>

                <Typography variant="h2" color="primary" component="div">
                    Log In
                </Typography>

                <StyleTextField
                    id="filled-search"
                    label="User Name"
                    type="search"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    onChange={(e) => handleInputChange(e, 'userName')}
                    value={user.userName}
                />

                <StyleTextField
                    id="filled-search"
                    label="Password"
                    type="search"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    onChange={(e) => handleInputChange(e, 'password')}
                    value={user.password}
                />

                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        onClick={hendleLogIn}
                    >Log In</Button>
                </Stack> <br />

                <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                >
                    not registered? sign up now!
                </Typography>

                <Button
                    // to="/register"
                    variant="contained"
                    color="primary"
                    onClick={() => { navigate('/register') }}
                >
                    register
                </Button>
            </div >
        </>
    )
}

export default LogIn;