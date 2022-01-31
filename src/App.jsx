import React, { useState } from "react";
import Button from "../components/Button.jsx";
import LoginScreen from "../components/LoginScreen.jsx";
import Subjects from "../components/Subjects.jsx";
import "./App.css";

function App() {
  const [hidden, setHidden] = useState(false);
  const middle=()=>{
    if(!hidden){
      return(
        <div className="interact" onClick={()=>setHidden(true)}>
        <Button/>
        </div>
      )
    }
    else{
      return(
      <Subjects/>
      )
    }
  }
  return(
  <>
    <div className="bgimage">
    <div className="header">
      <img className="logo"src="../public/logo.png" draggable="false"></img>
      <h1 className="mainheader">Course Companion</h1>
    </div>    
         {middle()} 
     <div className="footer">
      <a href="https://github.com/abhinavthapa1998" target="_blank"><img className="github-logo" src="./public/github.png" draggable="false"></img></a>
      <div className="attribute">©Abhinav Thapa 2022</div> 
    </div>
    </div>
  </>

)}

export default App;
