import { getUsers, getUser, addUser, editUser, deleteUser } from "../models/Users.js";

export default {
    getUsers: async (req, res) => {
        try {
            const users = await getUsers();
            res.send(users);
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    getUser: async (req, res) => {
        try {
            const userId = +req.params.userID;
            const user = await getUser(userId);
            if (!user) {
                res.status(404).send({ error: 'User not found' });
                return;
            }
            res.send(user);
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    addUser: async (req, res) => {
        try {
            const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
            await addUser(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile);
            res.send({
                msg: 'New User Added'
            });
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    },
    editUser: async (req, res) => {
        try {
            const [user] = await getUser(+req.params.userID);
            if (!user) {
                res.status(404).send({ error: 'User not found' });
                return;
            }
            let { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
            firstName = firstName || user.firstName;
            lastName = lastName || user.lastName;
            userAge = userAge || user.userAge;
            Gender = Gender || user.Gender;
            userRole = userRole || user.userRole;
            emailAdd = emailAdd || user.emailAdd;
            userPass = userPass || user.userPass;
            userProfile = userProfile || user.userProfile;
            await editUser(+req.params.userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile);
            res.json(await getUsers());
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deletedUser = await deleteUser(req.params.userID);
            if (!deletedUser) {
                res.status(404).send({ error: 'User not found' });
                return;
            }
            res.send({
                msg: 'User Deleted Successfully'
            });
        } catch (error) {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
};
