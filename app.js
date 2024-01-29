const express = require("express");
const connectDb = require("./DbConnect");
const cors = require("cors");
const app = express();
connectDb();

app.use(express.json());
app.use(cors());
const userRouter = require("./src/routes/userRoute");
app.use("/dev/api", userRouter);



module.exports = app;
