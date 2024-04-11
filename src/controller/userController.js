import {
    handleUserLogin
    // handleUserLogin, getAllUsers, createNewUser,
    // deleteUser, editUser, getALLCodeServices
} from '../service/userService'
export const  handleLogin = async (req, res) => {
        
    //res.render("user.ejs")
    let username = req.body.username
    let password = req.body.password

    if (!username || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter'
        })
    }
    let userData = await handleUserLogin(username, password);
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.message,
        user: userData.user ? userData.user : {}
    })
    return res.send("crud post from server");
    }

// export const  handleLogin = async (req, res) => {
//     let username = req.body.username
//     let password = req.body.password

//     if (!username || !password) {
//         return res.status(500).json({
//             errCode: 1,
//             message: 'Missing input parameter'
//         })
//     }

//     let userData = await handleUserLogin(username, password)
//     return res.status(200).json({
//         errCode: userData.errCode,
//         message: userData.message,
//         user: userData.user ? userData.user : {}
//     })
// }

// let handleGetAllUsers = async (req, res) => {
//     let id = req.query.id

//     if (!id) {
//         return res.status(200).json({
//             errCode: 1,
//             errMessage: 'Missing required parameter',
//             users: []
//         })
//     }

//     let users = await getAllUsers(id)
//     console.log(users)
//     return res.status(200).json({
//         errCode: 0,
//         errMessage: 'ok',
//         users
//     })
// }

// let handleCreateNewUser = async (req, res) => {
//     let message = await createNewUser(req.body)
//     console.log(message)
//     return res.status(200).json(message)
// }

// let handleEditUser = async (req, res) => {
//     let data = req.body
//     let message = await editUser(data)
//     return res.status(200).json(message)
// }

// let handleDeleteUser = async (req, res) => {
//     if (!req.body.id) {
//         return res.status(200).json({
//             errCode: 1,
//             errMessage: 'Missing required parameter!'
//         })
//     }
//     let message = await deleteUser(req.body.id)
//     return res.status(200).json(message)
// }

// let getALLCode = async (req, res) => {
//     try {
//         let data = await getALLCodeServices(req.query.type)
//         return res.status(200).json(data) 
//     } catch (e) {
//         console.log('Error get allcode: ', e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: `Error from server.`
//         })
//     }
// }

// module.exports = {
//      handleGetAllUsers, handleCreateNewUser,
//     handleEditUser, handleDeleteUser, getALLCode
// }