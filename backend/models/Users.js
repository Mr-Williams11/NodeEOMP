import {pool} from '../config/config.js'

//USER FUNCTIONS
const getUsers = async()=>{
    const[result] = await pool.query(`
    SELECT *
    FROM Users
    `)
    return result
}
const getUser = async(userID)=>{
    const [result] = await pool.query(`
    SELECT *
    FROM Users
    WHERE userID = ?
    `,[userID])
    return result
}
const addUser = async (firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)=>{
    const [result] = await pool.query(`
   INSERT INTO Users (firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile) VALUES (?,?,?,?,?,?,?,?)
    `,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile])
    return result
}
const editUser = async (userID,firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)=>{
    const [user] = await pool.query(`
    UPDATE Users SET firstName = ?,lastName = ?,userAge = ?,Gender = ?,userRole = ?,emailAdd = ?,userPass = ?,userProfile = ? WHERE (userID = ?)
    `,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,userID])
    return getUsers(user)
}

const deleteUser = async (userID)=>{
    const [user] = await pool.query(`
    DELETE FROM Users
    WHERE (userID = ?) 
    `,[userID])
    return getUsers(user)
}

export{getUsers,getUser,addUser,editUser,deleteUser}