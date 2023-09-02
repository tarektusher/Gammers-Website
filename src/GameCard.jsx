import React from 'react'
import './App.css'
const GameCard = ({game}) => {
  return (
          <div>
               <div className="game">
                         <img src={game.background_image} alt="Game" />
               </div>
               <div>
                    <span>{game.rating}</span>
                    <h2>{game.name}</h2>
               </div>
          </div>
     );
};

export default GameCard