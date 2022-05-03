import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ErrorPage from './components/Error.js';
import Home from './components/Home.js';
import LogIn from './components/LogIn.js';
import Register from './components/Register.js'
import EditTrips from './components/EditTrips.js';

const Main = () => {
    const [trips, setTrips] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/trips')
            .then(res => res.json())
            .then(data => {
                console.table(data.data)
                setTrips(data.data)
            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/api/admin')
            .then(res => res.json())
            .then(data => {
                console.table(data.data)
                setAdmin(data.data)
            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then(data => {
                console.table(data.data)
                setUsers(data.data)
            })
    }, [])

    return (

        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<EditTrips users={users} admin={admin} />} /> */}
                <Route path="/" element={<LogIn users={users} admin={admin} />} />
                <Route path="/login" element={<LogIn users={users} admin={admin} />} />
                <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
                <Route path="/home" element={<Home trips={trips} />} />
                <Route path="/edittrips" element={<EditTrips trips={trips} />} />
                <Route path="*" element={<ErrorPage to="/" />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Main;