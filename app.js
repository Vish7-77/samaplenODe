const express = require("express");
const connectDb = require("./DbConnect");
const app = express();
connectDb();

app.use(express.json());
const userRouter = require("./src/routes/userRoute");
app.use("/dev/api", userRouter);



module.exports = app;
