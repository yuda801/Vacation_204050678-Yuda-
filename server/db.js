import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'vacationFinder',
    password: '123456'
})

export default connection;