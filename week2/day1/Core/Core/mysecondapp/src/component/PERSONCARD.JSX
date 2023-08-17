import './App.css';
import PersonCard from './Component/PersonCard';
const personcard = (props) => {
    const {firstname,lastname,age,haircolor}= props
    return(<div>
      <h2>{lastname},{firstname}</h2>
      <p>Age :{age}</p>
      <p> hair color:{haircolor}</p>
      </div>
    ) 
    }
    export default personcard ;