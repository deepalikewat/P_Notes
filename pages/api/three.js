import connectdb from "@/lib/connectdb";
import mon from "@/module/mon"
export default async function handler(req,res){

    await connectdb();
if (req.query.ll)
{
    const dev = await mon.create({
        name:req.query.lol,
        age:req.query.ag,
        fathername:req.query.fa,
    })
    res.status(200).json(dev)
}
else {
    const de = await mon.find({
    })


    res.status(200).json(de)
}




}