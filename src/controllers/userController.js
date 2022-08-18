import userService from "../services/userService"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password
    // console.log(email)
    console.log(email)
    // console.log(password)
    if (!email || !password) {
        console.log(!email)
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Mising input parameter'
        })


    }

    let userData = await userService.handleUserLogin(email, password);
    // console.log(userData)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

module.exports = {
    handleLogin: handleLogin
}