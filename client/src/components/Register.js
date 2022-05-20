import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


import '../Main.css'

const StyleTextField = styled(TextField)({
    backgroundColor: "#fff",
});

const Register = (props) => {
    let navigate = useNavigate();
    console.log("register-page")

    const users = props.users;
    const setUsers = props.setUsers;
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: ''
    });

    const handleInputChange = (e, name) => {
        let inputValue = e.target.value
        let tempNewMedicine = {
            ...newUser,
            [name]: inputValue
        }
        setNewUser(tempNewMedicine)
    }

    //checks if username already exists
    const checkUniqueUserName = () => {
        let userName = newUser.userName;
        let isUnique = true;
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === userName) {
                isUnique = false;
                break;
            }
        }
        return isUnique;
    }

    const createUser = (e) => {
        e.preventDefault()
        if (!checkUniqueUserName()) {
            alert("user name already exists")
            return;
        }
        let body = {
            ...newUser
        }
        if ((newUser.firstName && newUser.lastName && newUser.userName && newUser.password)) {
            fetch('http://localhost:5001/api/users',
                {
                    method: 'POST',
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
            setUsers(users => [...users, newUser])
            console.log("users after setting them:" + users)
            setNewUser({
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            })
        }
        else {
            alert("please fill all fielsd")
            console.log("error")
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <PersonAddAltIcon />
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
            <div id="register-form" className='background center' style={{ display: "flex" }}>

                <Typography variant="h2" color="primary" component="div">
                    Sign Up
                </Typography>
                <StyleTextField
                    sx={{ input: { color: 'green' } }}
                    id="filled-search"
                    label="First Name"
                    type="search"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    onChange={(e) => handleInputChange(e, 'firstName')}
                    value={newUser.firstName}
                />

                <StyleTextField
                    id="filled-search"
                    label="Last-Name"
                    type="search"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    onChange={(e) => handleInputChange(e, 'lastName')}
                    value={newUser.lastName}
                />

                <StyleTextField
                    id="filled-search"
                    label="User Name"
                    type="search"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    onChange={(e) => handleInputChange(e, 'userName')}
                    value={newUser.userName}
                />

                <StyleTextField
                    id="filled-search"
                    label="Password"
                    type="search"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    onChange={(e) => handleInputChange(e, 'password')}
                    value={newUser.password}
                />

                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        onClick={createUser}
                    >sign up</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        onClick={() => { navigate('/login') }}
                    >log-in</Button>
                </Stack>
            </div >
        </>
    )
}

export default Register;