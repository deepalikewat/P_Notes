import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default () => {
    //for fetching data
    const [getdata, setdata] = useState([])

    function dfetch() {
        axios.get("/api/mess").then(res => {
            setdata(res.data)
        })
    }
    useEffect(() => {

        dfetch()

    }, [])

    function delnote(_id) {

        axios.get("/api/mess?del="+_id

        ).then(res=>{
            Swal.fire(JSON.stringify(res.data))
            dfetch();
        })

    }
   function idx(){
        let ax=document.getElementById("a");
        let bx=document.getElementById("b");
       let x=new Date();
       let dx=String(x.getDate()).padStart(2,0)+"-"+String(x.getMonth()).padStart(2,0)+"-"+x.getFullYear();
       let postdata = {
sub:ax.value,note:bx.value,dat:dx
       }
       axios.post("/api/mess",postdata
       ).then(res=>{
           // Swal.fire(JSON.stringify(res.data))
           Swal.fire("Saved","Your notes has been successfully saved.","success")
           ax.value="";
           bx.value="";
           dfetch();
       })
       // Swal.fire(JSON.stringify(postdata))
   }
    return <>
        <div className="container">
            <div className="card mt-3 cardx shadow" >

            <form method="POST" action="/api/mess"
                  className=" text-center justify-content-center align-items-center py-2">
                <div className="card-header text-center text-success fw-bold h2">
                   PUBLIC NOTES
                </div>
                {/*<div className="text-dark">*/}
                {/*   ANONYMOUS CHATTING*/}
                {/*</div>*/}
           <div className="card-body">
               <div className="mt-2">
                   <input maxLength="20" id="a" placeholder="Enter your name" name="sub" className="form-control"/>
               </div>
               <div className="mt-2">
                   <textarea className="form-control" placeholder="Notes...." id="b" style={{height:"150px" }}>
                   </textarea>
               </div>
               <div className="mt-2">
                   <input onClick={(e)=>{
                       idx()
                   }} id="d" value="Send" type="button" className="btn btn-success px-5"/>
               </div>
           </div>
                <div  className="text-white text-end pe-2" style={{
                    // backgroundColor:"#e4b345"
                }} >

                    &copy;Deepali kewat
                </div>
            </form>
            </div>

            <table className="table table-responsive text-center table-dark table-striped mt-4">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {getdata.map((ty) => (
                    <tr key={ty._id}>
                        <td>{ty.subject}</td>
                        <td>{ty.date}</td>
                        <td>
                            <button className="btn btn-outline-success" onClick={() => {
                                Swal.fire(ty.subject,ty.message)
                            }}>
                                View
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>


        </div>


    </>


}
