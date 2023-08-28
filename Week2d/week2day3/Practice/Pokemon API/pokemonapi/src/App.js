import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0     ')
    .then(res=>{ res.data.results 
    setpokeapi(res.data.results)})
  })
    .catch((err)=>{
      console.log(err);
    },[])

  return (
    <div className="App">
      <ul>
        {
          pokemon.map((pokemonapi, index)=>{
            return (<li key={index}>
                {pokemonapi.name}</li>)
          })
        }
      </ul>
      
    </div>
      
    
  );
}

export default App;
