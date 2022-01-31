import Subject from "./Subject";
import "./Subjects.css";
const Subjects = () =>{
    return(
       <div className="cardscontainer">
           <Subject sub="polity"/>
           <Subject sub="geog"/>
           <Subject sub="history"/>
       </div>
    )
}

export default Subjects;