import React, { useState } from 'react';
import './App.css';
import Form from './component/form';
import Display from './component/display';

function App() {
  const [colors,setColors]=useState([])
  const add = (color) =>{
    setColors([...colors,color])
  }
  return (
    <div className="App">
      
      <Form  add={add} />
      <Display colors={colors} />

    </div>
  );
}

export default App;
