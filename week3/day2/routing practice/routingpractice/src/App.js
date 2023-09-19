import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hello from './component/Hello';
import Home from './component/Home';



function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route  path='/home' element={<Home/>}/>
     
      <Route  path='/:word' element={<Hello/>}/>
      
    </Routes>
    
    </div>
  );
}

export default App;
