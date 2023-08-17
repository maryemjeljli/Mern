import personcard from "./component";
import "./App.css";
const people = [
  {

    firstName: "jane",
    lastName: "doe",
    age: 45,
    hairColor: "black",
  },
  {
    firstName: "smith",
    lastName: "Jhon",
    age: 88,
    hairColor: "brown",
  },
  {
    firstName: "fillmore",
    lastName: "millard",
    age: 50,
    hairColor: "brown",
  },
  {
    firstName: "smith",
    lastName: "Maria",
    age: 62,
    hairColor: "brown",
  },
];
function app () {
  return(
    <div className="app">
    <personcard key={index}
        firstname={people[0].firstName}
        lastname={people[0].lastName}
        age={people[0].age}
        haircolor={people[0].hairColor}/>
    
    
    </div>
  )
}