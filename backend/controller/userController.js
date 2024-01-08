const User = require("../model/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getUsers = async(req, res) => {
    try {
        const allUser = await User.find({});
        return res.status(200).json(allUser);     
    } catch (error) {
        return res.status(404).json(error)
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json(error)
    }
}

const createUser = async(req, res) => {
    try {
        const {username, email_address, password, gender, age} = req.body;

        const user = new User({
            username,
            email_address,
            gender,
            age
        })
        user.password =  user.generateHash(password);
        user.save();

        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json(error)
    }
};

const updateUser = async (req, res) =>{
    try {
        const id = req.params.id;
        const {username, email_address, password, gender, age} = req.body;

        // const user = await User.findByIdAndUpdate(id, req.body);
        const user = await User.findByIdAndUpdate(id, {
            username,
            email_address,
            gender,
            age
        });
        user.password = user.generateHash(password);
        user.save();
        
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json(error)
    }
}

module.exports = {getUsers, createUser, getUser, updateUser, deleteUser};