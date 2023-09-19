import React, { useState } from "react";


const Form =(props) =>{
    const [color,setColor] = useState("");
    const onSubmithandler=(e)=>{
        e.preventDefault()
        //setColor("")
        console.log(color);
        props.add(color)
    }
    return(
        <div className="App">
            <form onSubmit={onSubmithandler}>
                <label>color:</label>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/> 
                <button type="submit">add</button>
            </form>
            
        </div>
    )
  
}
export default Form 

