import {useState} from "react";


const Form = (props) =>{
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[password,setpassword]=useState("");
    const[email,setemail]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");



    return (
      <div className="App">
       <form>
       <div>
        <label>firstname:</label>
        <input type="text" onChange={(e)=>setfirstname(e.target.value)}/> 
        </div>
        {firstName.length < 2 && firstName.length > 0 ? (
            <p>First Name must be at least 2 characters</p>
          ) : null}
        <div>
        <label>lastname:</label>
        <input type="text" onChange={(e)=>setlastname(e.target.value)} /> 
        </div>
        {lastName.length < 2 && lastName.length > 0 ? (
            <p>Last Name must be at least 2 characters</p>
          ) : null}
        <div>
        <label>password :</label>
        <input type="password" onChange={(e)=>setpassword(e.target.value)}/> 
        </div>
        {password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
          ) : null}
        
        <div>
        <label>confirm password :</label>
        <input type="password" onChange={(e)=>setconfirmpassword(e.target.value)}/> 
        </div>
        {password.length < 8 ? (
            <p>Password must be at least 8 characters</p>
          ) : null}
        <div>
        <label>email:</label>
        <input type="email" onChange={(e)=>setemail(e.target.value)}/> 
        </div>
        
        {email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
        
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