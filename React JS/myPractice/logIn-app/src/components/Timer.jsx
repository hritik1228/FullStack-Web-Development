import React,{useState} from "react";

function Timer(){

    const now=new Date().toLocaleTimeString();

    const [time,setTime]=useState(now);

    function update(){
        const newTime=new Date().toLocaleTimeString();

        setTime(newTime);
    }

    setInterval(update,1000);


    return <div className="NaN"> 
        <h1>{time}</h1>
        
    </div>
}

export default Timer;