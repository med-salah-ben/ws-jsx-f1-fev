import React from "react";
import MainCard from "./MainItems/MainCard";
import MainVideo from "./MainItems/MainVideo";


const Main = ()=>{
    return(
    <div style={{display:"flex"}}>
        <MainVideo />
        <MainCard />
    </div>
    )
}

export default Main;