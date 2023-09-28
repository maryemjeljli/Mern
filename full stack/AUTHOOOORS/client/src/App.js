import './App.css';
import {Routes,Route} from 'react-router-dom';
import Display from './components/Display';
import Edit from './components/Edit';
import Create from '/components/Create'

function App() {
  return (
    <div className="App">
      <h1>FAVORITE AUTHOR</h1>
      <Routes>
        <Route path='/' element={<Display/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
