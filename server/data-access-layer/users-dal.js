import connection from '../db.js';

const getAllUsers = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM users'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const addUser = async (firstName, lastName, userName, password) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO users (firstName, lastName, userName, password)
            VALUES
            ('${firstName}','${lastName}','${userName}','${password}');`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}


const deleteUser = async (id) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `DELETE FROM users WHERE userID = ${id};`
        )

        result.success = true

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAllUsers,
    addUser,
    deleteUser
}