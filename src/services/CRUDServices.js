import db from '../models/index.js'
import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordByBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordByBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleID: data.roleID,
                phoneNumber: data.phoneNumber,
                possitionID: data.STRING,

            }
            )
            resolve("trả về cho service");
        } catch (error) {
            reject(error)
        }
    })

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(password)
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash)
        } catch (error) {
            reject(e)
        }

    })
}


let getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll();
            // console.log(users);
            resolve(users);
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfoByID = async (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("id in service", userID)
            let user = await db.User.findOne({
                where: { id: userID },
                // raw: true

            })
            if (user)
                resolve(user);
            else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await getUserInfoByID(data.id)
            // let user = await db.User.findOne({
            //     where: { id: data.id },
            //     // raw: true

            // })
            console.log("full infor user:", user)
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;
                await user.save()
                let allUser = await getAllUser();
                resolve(allUser)

            } else {
                resolve();
            }
        } catch (e) {
            console.log(e)
        }
    })
}

let deleteUserByID = async (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userDelete = await db.User.findOne({
                where: { id: userID }
            })
            if (userDelete) {
                await userDelete.destroy();
                resolve("delete OK")
            }
            else {
                resolve("not found!")
            }
        } catch (e) {
            reject(e)
        }

    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoByID: getUserInfoByID,
    updateUserData: updateUserData,
    deleteUserByID: deleteUserByID
}