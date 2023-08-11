
import './App.css';
import PersonCard from './component/PersonCard';

function App() {
  let User=[{"lastname":"john","firstname":"john","age":45,"haircolor":"brown"},
  {"lastname":"john","firstname":"john","age":45,"haircolor":"brown"},
  {"lastname":"john","firstname":"john","age":45,"haircolor":"brown"},
  {"lastname":"john","firstname":"john","age":45,"haircolor":"brown"}]
   
 
  return (
    
    
        <div className="App">
            <PersonCard/>        
</div>
  
  );
}

export default App;
