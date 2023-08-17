
import React, { useState } from "react";

const Personcard = (props) => {
    const {firstName,lastName,Age,haircolor}=props;
    const [age ,setAge] =useState(props.age);
   
    const changeAge=()=>{
        setAge(age + 1)
    }
    
    

  return (
    <div>
   
      <h2>{lastName},{firstName}</h2>
      <p>Age :{age}</p>
      <p> hair color:{haircolor}</p>
    <button onClick={() => { changeAge() }}>birthday button for {firstName},{lastName} </button>
     

    </div>
  )


}

export default Personcard ;