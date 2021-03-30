import React from 'react';
import './App.css';

function Pokedex(props){
  return (
    <div className="pokemon">
    <h3>{props.number}. {props.name}</h3>
      <img alt={props.alt} src={props.src}></img>
      <p className={props.classtype}>{props.type}</p>
    </div>
    )
}

function PokemonListArray(props){
  let pokemondata = [
    {number: "1", pokemon: "Bulbasaur", alt: "Bulbasaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", classtype: "grass", type: "grass type"},
    {number: "2", pokemon: "Ivysaur", alt: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", classtype: "grass", type:"grass type"},
    {number: "3", pokemon: "Venusaur", alt:"Venusaur", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", classtype:"grass", type:"grass type"},
    {number: "4", pokemon: "Charmander", alt:"Charmander", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", classtype:"fire type", type:"fire"},
    {number: "5", pokemon: "Charmeleon", alt:"Charmeleon", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", classtype:"fire type", type:"fire"},
    {number: "6", pokemon: "Charizard", alt:"Charizard", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", classtype:"fire type", type:"fire"},
    {number: "7", pokemon: "Squirtle", alt:"Squirtle", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", classtype:"water type", type:"water"},
    {number: "8", pokemon: "Wartole", alt:"Wartole", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", classtype:"water type", type:"water"},
    {number: "9", pokemon: "Blastoise", alt:"Blastoise", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", classtype:"water type", type:"water"},
    {number: "10", pokemon: "Caterpie", alt:"Caterpie", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", classtype:"bug type", type:"bug"},
    {number: "11", pokemon: "Metapod", alt:"Metapod", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", classtype:"bug type", type:"bug"},
    {number: "12", pokemon: "Butterfree", alt:"Butterfree", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", classtype:"bug type", type:"bug"},
  ];

  let pokemonex = pokemondata.map(function(pokemonArray){
    return (<Pokedex number={pokemonArray.number} name={pokemonArray.pokemon} alt={pokemonArray.alt} src={pokemonArray.src} classtype={pokemonArray.classtype} type={pokemonArray.type} ></Pokedex>)
  });

  return(
    <div>
     { pokemonex }
    </div>
  )
}

{/* <div className="pokemon">
{ pokemonex }
{ pokemonex2 }
{ pokemonex3 }
</div> */}

function App() {
  return (
    <div className="App">
        <h1>Pokedex</h1>

        <PokemonListArray></PokemonListArray>
    </div>
  );
}

export default App;
