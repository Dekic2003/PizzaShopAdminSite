import React,{useState,useEffect} from "react";
import "./styles/Dash.scss"


export default function Dash() {
    const[time,setTime]=useState('');
    function Time() {
        const date=new Date();
        setTime(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
    }
    useEffect(()=>{
        Time();
    },[]);

setTimeout(()=>{Time()},1000)

    return(
    <div className="Dash">
<p>{time}</p>

    </div>
    )
}
