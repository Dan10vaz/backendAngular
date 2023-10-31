import Users from "../models/UsersModel.js"

const existingUserService = async (email) => {
    return await Users.findOne({ email })
}

const saveUserService = async (user) => {
    return await Users.create(user)
}

const existsUserService = async (email) => {
    return await Users.findOne({ email })

}

export {
    existingUserService,
    saveUserService,
    existsUserService
}