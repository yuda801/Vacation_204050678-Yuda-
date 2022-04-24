import adminDal from '../data-access-layer/admin-dal.js';

const getAll = async () => {
    return await adminDal.getAll()
}

export {
    getAll
}