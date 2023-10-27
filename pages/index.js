import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from "react";
import Aru from "@/compom/Aru";
import Lol from "@/compom/Lol";
import {set} from "mongoose";



const inter = Inter({ subsets: ['latin'] })

let r=0;
export default function Home() {
    const [getnumber,setnumber ]=useState(0)


    useEffect(()=>{
r+=1
        setnumber(r)
    },[])
  return (
    <>
  <h1 >{getnumber}</h1>
        <div className="btn btn-outline-dark" onClick={(e)=>{

            setnumber(getnumber+1)
        }}>
  abc{getnumber}
        </div>

        <Lol kaju="qt" maju="papa" baju="hmm" color="primary"/>

      </>
  )
}
