import { useState, useEffect } from 'react';
import './App.css';
import GameCard from './GameCard';

const API_URL = 'https://api.rawg.io/api/games?key=4a85e928e93148f1b265866aa43b0296'
const game1 = {
  "id": 3498,
  "name": "Grand Theft Auto V",
  "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  "rating": 4.47,
}
function App() {
  const [games , setGames] = useState([]);
  const searchGames = async() =>{
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setGames(data.results);
  }
  useEffect(() =>{
    searchGames();
  },[])
  return ( 
      <div className='app'>
        <h1>GA<span style={{color : 'red'}}>MM</span>ERS</h1>
        <div>
          <input 
            placeholder='Search Game Here'
            value='candy crush'
            onChange={()=>{}}
          />
          <span className="material-symbols-outlined">search</span>
        </div>
        {games ?
        (
          <div className="container">
            {games.map((game) =>
              <GameCard game ={game} key={game.id}/>
            )}
          </div>
        ): <h1>No game</h1>
      }
        
        
      </div>
  );
}

export default App
