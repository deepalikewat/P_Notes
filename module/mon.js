import mongoose from "mongoose";
const But = new mongoose.Schema({
    name:String,
    age:Number,
    fathername:String
})
module.exports=mongoose.models.mon || mongoose.model("mon",But)
//agar mon name ka koi module hai to usko le lo agar nai hai to create kar do
//agar existing db me change hoga to new server run karo