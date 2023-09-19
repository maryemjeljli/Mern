import React,{useState} from 'react';
import axios from 'axios';
const ProductForm = () =>{
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const objToBeSent = {
        title,
        price,
        description
            
    }

    axios.post(`http://localhost:5000/api/product`, 
    objToBeSent)
    
       
        .then(res=>{console.log(res)})
            .catch(err=>console.log(err))
    }

return(
    <div className="App">
        
        <form onSubmit={onSubmitHandler}>
        <div>
        <label>TITLE:</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value) }/> 
        </div>
        <div>
        <label>price:</label>
        <input type="Number" onChange={(e)=>setPrice(e.target.value)}/> 
        </div>
        <div>
        <label>description:</label>
        <input type="text" onChange={(e)=>setDescription(e.target.value)}/> 
        </div>
        <button>create</button>

        
        </form>
          
        
        

    </div>
)
    }
    export default ProductForm