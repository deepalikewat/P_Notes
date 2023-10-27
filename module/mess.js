import mongoose from "mongoose";
const Me = new mongoose.Schema({
    subject:String,
    message:String,
    date:String,


})
module.exports=mongoose.models.mess || mongoose.model("mess",Me)
//agar mon name ka koi module hai to usko le lo agar nai hai to create kar do
//agar existing db me change hoga to new server run karo