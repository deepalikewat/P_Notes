
import connectdb from "@/lib/connectdb";
import mess from "@/module/mess"
export default async function handler(req, res) {
    await connectdb();
    if(req.method=="POST")
    {
        const msg = await mess.create(
            {
                subject:req.body.sub,
                message:req.body.note,
                date:req.body.dat,

            }
        )

    res.status(200).json(msg)

    }
    else {

        if (req.query.del){
            const msg = await mess.deleteOne({
_id:req.query.del
            })
            res.status(200).json("Deleted successfully"+req.query.del)
            return ;
        }
        const msg = await mess.find({

        })

            res.status(200).json(msg)

    }
}
