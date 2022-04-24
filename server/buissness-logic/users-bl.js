import usersDal from '../data-access-layer/users-dal.js';

const getAllUsers = async () => {
    return await usersDal.getAllUsers()
}


const addUser = async (body) => {
    return await usersDal.addUser(
        body.firstName, body.lastName, body.userName, body.password)
}
const deleteUser = async (id) => {
    return await usersDal.deleteUser(id)
}

export {
    getAllUsers,
    addUser,
    deleteUser
}