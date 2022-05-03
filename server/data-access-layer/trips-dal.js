import connection from '../db.js';

const getAllTrips = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM trips'
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

const addTrip = async (description, destination,
    date, price, numOfFolowers) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO trips (description, destination, 
                date, price, numOfFolowers)
            VALUES
            ('${description}','${destination}','${date}'
            ,'${price}','${numOfFolowers}');`
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


const updateTrip = async (id, description, destination,
    date, price, numOfFolowers) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `UPDATE trips 
            SET description = '${description}', destination = '${destination}', 
                date = '${data}', price = '${price}', numOfFolowers = '${numOfFolowers}')
            WHERE tripID = ${id}`
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


const deleteTrip = async (id) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `DELETE FROM trips WHERE tripID = ${id};`
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
    getAllTrips,
    addTrip,
    updateTrip,
    deleteTrip
}