import React, { useState }  from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'


const Create = (props) => {
  const [name, setName] = useState("")
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

 
  const onSubmitAuthor= (e) => {
    e.preventDefault()
    const newAuthor = {name}
    axios.post("http://localhost:8000/api/author", newAuthor)
            .then(res => {
                console.log("author is added ") 
                navigate("/")
            })
            .catch(err => {
                
             
              const errorResponse = err.response.data.errors;
              const errorArr = []; 
              for (const key of Object.keys(errorResponse)) 
              {  errorArr.push(errorResponse[key].message)
              }
              
              setErrors(errorArr);
              
            })
           
  }
  return (
    <div >
        <p className="text-danger-emphasis">add a new author:</p>
        <form className="border border-dark-subtle" style={{width:'350px'}} onSubmit={onSubmitAuthor} >
        <div  style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</div>
                <label>Name:</label><br/>
                <div className='py-2'><input value={name} onChange={(e) => { setName(e.target.value) }} /></div>
        
            <div>
            <button className="btn btn-primary me-3" onClick={() => { navigate("/") }} >Cancel</button>
            <button className="btn btn-primary" >Submit</button>
            
            </div>
          
      
        </form>

    </div>
  )
}

export default Create