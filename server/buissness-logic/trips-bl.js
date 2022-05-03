import tripsDal from '../data-access-layer/trips-dal.js'

const getAllTrips = async () => {
    return await tripsDal.getAllTrips()
}

const addTrip = async (body) => {
    return await tripsDal.addTrip(
        body.description, body.destination, body.date,
        body.price, body.numOfFolowers)
}

const updateTrip = async (id, body) => {
    return await tripsDal.updateTrip(
        id, body.description, body.destination, body.date,
        body.price, body.numOfFolowers)
}

const deleteTrip = async (id) => {
    return await tripsDal.deleteTrip(id)
}
// const updateTrip = async (id) => {
//     return await tripsDal.updateTrip(id)
// }

export {
    getAllTrips,
    addTrip,
    updateTrip,
    deleteTrip
}