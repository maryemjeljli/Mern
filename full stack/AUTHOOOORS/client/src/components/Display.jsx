import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'


const Display = () => {
    const [author,setAuthor]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors' )
        .then(res=>{
            console.log(res.data.allAuthor)
            setAuthor(res.data.allAuthor)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const justDelete = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        const filterAuthor = author.filter((oneauthor) => {
            if (oneauth._id === id) {
                return false
            } else {
                return true

            }
        })
        setAuthor(filterAuthor)
    }


  return (
    <div style={{display:'block'}}>
                <Link to={"/new"}>add an author</Link>
                <p className="text-danger-emphasis">We have quotes by:</p>
           
              <table className="table table-bordered border-primary table-striped table-hover border border-black">
              <tr>
                 <th>Author</th>
                 <th>Actions available</th>
               </tr>
               <tbody>
               {
                   author.map((author) => {
                    return <tr  key={author._id}>
                       <td className="text-danger-emphasis">{author.name}</td>
                       <td > 
                           <button className="btn btn-danger me-3" onClick={() => { justDelete(author._id) }} >Delete</button>
                           <Link to={"/edit/" + auth._id}><button className="btn btn-primary">edit</button></Link>


                       </td>
                       </tr>
    
                })
                }
                </tbody>
             </table>
            
            
        
            </div>
  )
}

export default Display