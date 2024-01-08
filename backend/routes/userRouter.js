const express = require("express");

const router = express.Router();

const [
    getUsers,
    createUser
] = require("../controller/userController")

router.get("/", getUsers);
router.post("/", createUser);

module.exports = router