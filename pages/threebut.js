import {useState} from "react";
import axios from "axios";

export default ()=>{
const [getdata,setdata]= useState()

    function dfetch() {
 axios.get("/api/three").then(res=>{
     setdata(JSON.stringify(res.data))
 })


    }

    return <>
        <div>
            <form method="GET" action="/api/three" className=" bg-primary d-flex text-center justify-content-center align-items-center" >
                <div>

                    <input name="ll"   type="hidden" className="form-control"/>
                    <input name="lol"  className="form-control"/>
                    <input name="ag" type="number" className="form-control"/>
                    {/*<input name="ag" type="date" className="form-control"/>*/}
                    {/*<input name="ag" type="time" className="form-control"/>*/}

                    <input name="fa" className="form-control"/>
                    <input  value="button" type="submit" className="form-control"/>
                </div>


            </form>
        </div>
        <div>
            <form method="GET" action="/api/three" className=" bg-primary d-flex text-center justify-content-center align-items-center " >

                <div className="ms-2 mt-4">
                    <input  value="button" type="submit" className="form-control"/>
                </div>
            </form>
        </div>
        <div>
            <input onClick={()=>{
                dfetch()
            }} value="button" type="button" className="form-control"/>


        </div>







<div className="">
    {getdata}
</div>

    </>



}
