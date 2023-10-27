// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Chat from "@/module/Chat"
import connectdb from "@/lib/connectdb";
export default async function handler(req, res) {
    await connectdb();
    if (true) {
        const resultx = await Chat.create(
            {
                name:"deepali",
                user_id:"34",
                message:req.body.clickx,
                chat_topic:req.body.clickxx,
            }
        )




//         const resultx= await Chat.find(
//             {
// // _id:"652aa7c11506e7631d060c4f"
//             }
//         )





        // const resultx= await Chat.deleteOne(
        //     {
        //         _id:"652aa7c11506e7631d060c4f"
        //     }
        // )

        res.status(200).json(resultx)
    } else {
        res.status(200).json("message:not entered")

    }

}
