import mongoose from "mongoose";




const Chat = new mongoose.Schema(
    {
        name:{
            type : String
        },
        user_id:{
            type:Number
        },
        message:{
            type:String
        },
        chat_topic:{
            type:String
        }
    },
    {
        timestamps:true
    }

)
module.exports=mongoose.models.Chat || mongoose.model("Chat",Chat)