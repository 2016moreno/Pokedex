import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Pokedex</h1>

        <div className="pokemon">
          <h3>1. Bulbasaur</h3>
          <img alt="Bulbasaur" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"></img>
          <p className="grass">grass type</p>
        </div>

        <div className="pokemon">
          <h3>2. Ivysaur</h3>
          <img alt="Ivysaur" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"></img>
          <p className="grass">grass type</p>
        </div>

        <div className="pokemon">
          <h3>3. Venusaur</h3>
          <img alt="Venusaur" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"></img>
          <p className="grass">grass type</p>
        </div>

        <div className="pokemon">
          <h3>4. Charmander</h3>
          <img alt="Charmander" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"></img>
          <p className="fire">fire type</p>
        </div>

        <div className="pokemon">
          <h3>5. Charmeleon</h3>
          <img alt="Charmeleon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"></img>
          <p className="fire">fire type</p>
        </div>

        <div className="pokemon">
          <h3>6. Charizard</h3>
          <img alt="Charizard" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"></img>
          <p className="fire">fire type</p>
        </div>

        <div className="pokemon">
          <h3>7. Squirtle</h3>
          <img alt="Squirtle" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"></img>
          <p className="water">water type</p>
        </div>

        <div className="pokemon">
          <h3>8. Wartortle</h3>
          <img alt="Wartortle" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"></img>
          <p className="water">water type</p>
        </div>

        <div className="pokemon">
          <h3>9. Blastoise</h3>
          <img alt="Blastoise" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"></img>
          <p className="water">water type</p>
        </div>

        <div className="pokemon">
          <h3>10. Caterpie</h3>
          <img alt="Caterpie" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"></img>
          <p className="bug">bug type</p>
        </div>

        <div className="pokemon">
          <h3>11. Metapod</h3>
          <img alt="Metapod" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"></img>
          <p className="bug">bug type</p>
        </div>

        <div className="pokemon">
          <h3>12. Butterfree</h3>
          <img alt="Butterfree" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"></img>
          <p className="bug">bug type</p>
        </div>
    </div>
  );
}

export default App;
