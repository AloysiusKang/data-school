require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT

const app = express();
app.use(express.json());

// Routers
const userRouter = require("./routes/userRouter");

app.use("/api/user", userRouter);

try {
    mongoose.connect(process.env.MONGO_URI)
    app.listen(PORT, () => {
        console.log(`Connected to database`);
        console.log(`Listening to port ${PORT}`);
    })
} catch (error) {
    console.log(error);
}
