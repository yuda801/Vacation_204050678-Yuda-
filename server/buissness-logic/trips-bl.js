import tripsDal from '../data-access-layer/trips-dal.js'
const getAllTrips = async () => {
    return await tripsDal.getAllTrips()
}

const addTrip = async (body) => {
    return await tripsDal.addTrip(
        body.description, body.destination, body.picturePath, body.date,
        body.price, body.numOfFolowers)
}
const deleteTrip = async (id) => {
    return await tripsDal.deleteTrip(id)
}

export {
    getAllTrips,
    addTrip,
    deleteTrip
}