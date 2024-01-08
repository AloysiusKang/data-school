const User = require("../model/User");
const bcrypt = require("bcrypt");

const getUsers = async(req, res) => {
    try {
        const allUser = await User.find({});
        return res.status(200).json(allUser);     
    } catch (error) {
        return res.status(404).json({
            msg: error
        })
    }
};

const createUser = async(req, res) => {
    try {
        const {username, email_address, password, gender, age} = req.body;
        
        bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
            // Store hash in your password DB.
        });

        const user = await User.create({
            username,
            email_address,
            password,
            gender,
            age
        })
        return res.status(200).json(user);
    } catch (error) {
        
    }
};

module.exports = [getUsers, createUser];