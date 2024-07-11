import mongoose from "mongoose";
const Me = new mongoose.Schema({
    subject:String,
    message:String,
    date:String,


})
module.exports=mongoose.models.mess || mongoose.model("mess",Me)
