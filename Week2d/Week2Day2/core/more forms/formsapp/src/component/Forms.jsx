import {useState} from "react";


const Form = (props) =>{
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[password,setpassword]=useState("");
    const[email,setemail]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");
  const onSubmithandler=(e)=>console.log("success");


    return (
      <div className="App">
       <form onSubmit={onSubmithandler}>
       <div>
        <label>firstname:</label>
        <input type="text" onChange={(e)=>setfirstname(e.target.value)}/> 
        </div>
        <div>
        <label>lastname:</label>
        <input type="text" onChange={(e)=>setlastname(e.target.value)} /> 
        </div>
        <div>
        <label>password :</label>
        <input type="password" onChange={(e)=>setpassword(e.target.value)}/> 
        </div>
        <div>
        <label>confirm password :</label>
        <input type="password" onChange={(e)=>setconfirmpassword(e.target.value)}/> 
        </div>
        <div>
        <label>email:</label>
        <input type="email" onChange={(e)=>setemail(e.target.value)}/> 
        </div>
        
        </form>
        <div>
            <h1>your form data</h1>
            <p>firstname: {setfirstname}</p>
            <p>lastname :{setlastname}</p>
            <p>email :{setemail}</p>
            <p>password :{setpassword}</p>
            <p>confirm password {setconfirmpassword}:</p>
        </div>
      </div>
    );
  }
  
export default Form