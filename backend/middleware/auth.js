import {config} from 'dotenv'
config()
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { verifyUser } from '../models/users.js';

// middleware for authentication of the user
const verifyToken = (req, res, next) => {
    let { cookie } = req.headers;
    let tokenInHeader = cookie && cookie.split('=')[1];
    if (!tokenInHeader) {
        return res.sendStatus(401);
    }
    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).send({ msg: "Invalid or expired token" });
        }
        req.user = user;
        next();
    });
};
// Token generator
const createToken = async (req, res, next) => {
        const {emailAdd, userPass} = req.body
        const hashedUserPass = await verifyUser(emailAdd)
        bcrypt.compare(userPass,hashedUserPass,(err,result) =>{
            if (err) throw err
            if(result === true){
                const token = jwt.sign({emailAdd:emailAdd}, process.env.SECRET_KEY,{expiresIn:'1h'})
                res.cookie('jwt', token, {httpOnly:false})
                res.send({
                    token:token,
                    msg: "You have logged in successfully!"})
                next()
            }else {
                res.send({msg: "The username or password does not match"})
            }
        })
    }
    // exporting functions
    export {verifyToken, createToken}