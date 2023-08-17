
import './App.css';
import PersonCard from './Component/PersonCard';

function App() {
  const people = [
    {firstName:"jane",lastName:"doe", age: 45,hairColor:"black"},
    {firstName: "smith",lastName: "Jhon",age: 88,hairColor: "brown"}]
  return (
    <div className="App">
    {people.map((person, index) => {
      return (<PersonCard
        key={index}
        firstName={person.firstName}
        lastName={person.lastName}
        age={person.age}
        hairColor={person.hairColor}/>)

    })
        
      }
    
    </div>
  );
}

export default App;
