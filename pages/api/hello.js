import connectdb from "@/lib/connectdb";
import Chat from "@/module/Chat"
export default async function der(rq, re) {

  // await connectdb()
  //
  //
  //
  //
  // const resultx=await  Chat.findOneAndUpdate({name:"raju"},{$set:{message:"okay"}});
  // // const resultx=await  Chat.findOneAndDelete({name:"raju"});
  // // const resultx=await  Chat.find({name:"raju"});
  const resultx=await  Chat.create({name:"raju"});
  // // const resultx=await  Chat.find({});

  // re.status(301).json("dsdfgekjhgfep")
}
