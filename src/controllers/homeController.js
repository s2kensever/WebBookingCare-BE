import db from '../models/index.js'
import CRUDServices from '../services/CRUDServices'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log(data)
        return res.render('homepage.ejs',
            { data: JSON.stringify(data) }
        );
    } catch (e) {
        console.log(e);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs")
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message)
    // console.log(req.body)
    return res.send("Hế lô postcrud")
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser()
    return res.render('displayCRUD.ejs', {
        data: data
    })

}
let editCRUD = async (req, res) => {
    let userID = req.query.id;
    // console.log("this is id:", userID)
    if (userID) {
        let userData = await CRUDServices.getUserInfoByID(userID)
        // console.log(userData)
        return res.render('editCRUD.ejs', {
            userData: userData
        })
    }


}

let putCRUD = async (req, res) => {
    let data = req.body;
    // console.log(data)
    let allUser = await CRUDServices.updateUserData(data);
    return res.render("displayCRUD.ejs", {
        data: allUser
    })
}


let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    await CRUDServices.deleteUserByID(id)
    console.log(id);
    return res.send("OK ")
}
// object: {
//     key: '',
//     value: ''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}
