
import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios";
import ProductForm from './components/ProductForm';




function App() {
  const [allproduct,setAllproduct] =useState([])
  useEffect (()=>{
    axios.get(`http://localhost:5000/api/product`)
    .then(res => {
      console.log(res.data.allproduct)
      setAllproduct(res.data.allproduct)
  })
  .catch(err => {
      console.log(err)
  })
  } 
  ,[])
  return (
    <div className="App">
      <ProductForm/>
       
     
      
    </div>
  );

  }
export default App;
