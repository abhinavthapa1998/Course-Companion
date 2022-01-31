import "./Subject.css";
import { useState, useEffect } from "react";
import data from "../src/data.json";

const Subject = (props) =>{
let cardTitle = '';
let url = '';
let schedule = '';
let seats = '';
let wait = '';
const [booked, setBooked] = useState(false);
if (props.sub === "polity"){
    cardTitle = data.subjects[0]["name"];
    url = data.subjects[0]["url"];
    schedule = data.subjects[0]["schedule"];
    seats = parseInt(data.subjects[0]["seats"]);
    wait = data.subjects[0]["wait"];
    
     
}
else if (props.sub === "geog"){
    cardTitle = data.subjects[1]["name"];
    url = data.subjects[1]["url"];
    schedule = data.subjects[1]["schedule"];
    seats = parseInt(data.subjects[1]["seats"]);
    wait = data.subjects[1]["wait"];

}
else {
    cardTitle = data.subjects[2]["name"];
    url = data.subjects[2]["url"];
    schedule = data.subjects[2]["schedule"];
    seats = parseInt(data.subjects[2]["seats"]);
    wait = data.subjects[2]["wait"];
    ()=>setBooked(true);
}
const bookerButton=()=>{
    if(seats < 20 && booked === false){
        return(
        <div className="button" onClick={()=>setBooked(true)} >
            <span>Book</span>
        </div>
        )
    }
    else if(seats == 20 && booked === false){
        return(
        <div className="button-wait" >
                    <span>Wait</span>
        </div>
        )
    }
    else if(booked === true){
        return(
        <div className="button-cancel" onClick={()=>setBooked(false)}>
            <span>Cancel</span>
        </div>
        )
    }
    

}


    return(
        <div className="subjectcard">
            <h1 className="cardtitle">{cardTitle}</h1>
            <img className="subjectimage"src={url} draggable="false"></img>
            <div className="schedule">
                <div>Mon-Fri</div>
                <div>{schedule}</div>
            </div>
            <div className="booker">
                
                 {bookerButton()}
                
                
            </div>

        </div>
    )
}
export default Subject;