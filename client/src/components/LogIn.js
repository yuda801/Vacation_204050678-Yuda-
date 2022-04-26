import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../Main.css'
import Register from './Register';
import Home from './Home.js';

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
    console.log("log-in-page")
    let navigate = useNavigate();

    let isLogedIn = sessionStorage.getItem("isRegistered")
    // if (isLogedIn) {
    //     alert("you are already loged-in")
    //     navigate('/home')`
    // }
    const users = props.users;
    const admin = props.admin;
    // const setUsers = props.setUsers;
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

        if (isLogedIn) {
            // alert("you are already loged-in")
            navigate('/home')
        }

        let userName = user.userName
        let password = user.password
        let adminName = admin.userName
        let adminPassword = admin.password

        //check if user entered userName and password
        if ((user.userName && user.password)) {

            //check if user is registered
            let isRegistered = false
            for (let i = 0; i < users.length; i++) {
                if (users[i].userName === userName && users[i].password === password) {
                    isRegistered = true;
                    break;
                }
                if (users[i].userName === userName && users[i].password === password) {
                    isRegistered = true;
                    break;
                }
            }
            if (isRegistered) {
                sessionStorage.setItem("isRegistered", true)
                sessionStorage.setItem("user", userName)
                navigate('/home');
            }
            else {
                alert("wrong user name or password, please check again")
            }
        }
        else {
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