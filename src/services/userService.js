import db from "../models/index"
import bcrypt from 'bcryptjs';
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email)
            // console.log("checkuseremail:", isExist)
            // console.log("this is email in handleUserLogin userservice:", email)
            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ['email', "roleID", 'password'],
                    where: { email: email },
                    raw: true
                })
                // console.log(user)
                if (user) {
                    let check = bcrypt.compareSync(password, user.password);
                    // console.log("check:", check)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = "OK"
                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = "wrong password"
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = "user not fouund"
                }

            }
            else {
                userData.errCode = 1;
                userData.errMessage = `your email isn't exit in your system.`
            }
            resolve(userData);

        } catch (e) {
            reject(e)
        }
    })
}



let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            })
            // console.log("checkuser email from email:", email)
            // console.log("user check:", user)
            if (user) {
                resolve(true)
            }
            else resolve(false)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin
}