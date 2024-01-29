const mongoose = require("mongoose");
// const URI = "mongodb://localhost:27017/samplenode";
const URI = "mongodb+srv://vishalgehlot334:XgKmlS4AOVOOgGsS@mongonode.bfgmxxf.mongodb.net/?retryWrites=true&w=majority";
// const PASS = "XgKmlS4AOVOOgGsS";
// const UserName  = "vishalgehlot334"



const connectDb = () => {
  mongoose
    .connect(URI)
    .then((con) => console.log("mongo connected at ", con.connection.host))
    .catch((err) => console.log("error while connecting to DB", err));
};

module.exports = connectDb;
