import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

// function Pokedex(props){
//   return (
//     <div className="pokemon">
//     <h3>{props.number}. {props.name}</h3>
//       <img alt={props.alt} src={props.src}></img>
//       <p className={props.classtype}>{props.type}</p>
//     </div>
//     )
// }



class Pokedex extends React.Component{
  constructor(props){
      //boilerplate
      super(props);
      //set initial state of object
      this.state = {number: props.number, name: props.name, alt: props.alt, src: props.src, back_image_url:props.back_image_url, classtype: props.classtype, type: props.type, completed: props.completed};

      this.toggle = this.toggle.bind(this);
  }

  toggle(){
    
    this.setState(
      function(state){
        // var i = 0;
        // if(i === 1){
        //   return {src: state.back_image_url};
        // }
        // else if(i > 1){
        //   i = 0;
        //   return {src: state.src};
          
        // }
        return {src: state.src, back_image_url:state.back_image_url, completed: !state.completed};
      }
    )
  }

  render(){

    let toggle = this.state.completed ? this.state.back_image_url: this.state.src;

    return (
      <div className="pokemon">
      <h3>{this.state.number}. {this.state.name}</h3>
        <img alt={this.state.alt} src={toggle} onClick={ this.toggle }></img>
        <p className={this.state.classtype}>{this.state.type}</p>
      </div>
      )
  }
}

// function PokemonListArray(props){
//   let pokemondata = [
//     {number: "1", pokemon: "Bulbasaur", alt: "Bulbasaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", classtype: "grass", type: "grass type"},
//     {number: "2", pokemon: "Ivysaur", alt: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", classtype: "grass", type:"grass type"},
//     {number: "3", pokemon: "Venusaur", alt:"Venusaur", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", classtype:"grass", type:"grass type"},
//     {number: "4", pokemon: "Charmander", alt:"Charmander", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", classtype:"fire type", type:"fire"},
//     {number: "5", pokemon: "Charmeleon", alt:"Charmeleon", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", classtype:"fire type", type:"fire"},
//     {number: "6", pokemon: "Charizard", alt:"Charizard", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", classtype:"fire type", type:"fire"},
//     {number: "7", pokemon: "Squirtle", alt:"Squirtle", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", classtype:"water type", type:"water"},
//     {number: "8", pokemon: "Wartole", alt:"Wartole", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", classtype:"water type", type:"water"},
//     {number: "9", pokemon: "Blastoise", alt:"Blastoise", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", classtype:"water type", type:"water"},
//     {number: "10", pokemon: "Caterpie", alt:"Caterpie", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", classtype:"bug type", type:"bug"},
//     {number: "11", pokemon: "Metapod", alt:"Metapod", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", classtype:"bug type", type:"bug"},
//     {number: "12", pokemon: "Butterfree", alt:"Butterfree", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", classtype:"bug type", type:"bug"},
//   ];

//   let pokemonex = pokemondata.map(function(pokemonArray){
//     return (<Pokedex number={pokemonArray.number} name={pokemonArray.pokemon} alt={pokemonArray.alt} src={pokemonArray.src} classtype={pokemonArray.classtype} type={pokemonArray.type} ></Pokedex>)
//   });

//   return(
//     <div>
//      { pokemonex }
//     </div>
//   )
// }

class PokemonListArray extends React.Component{
    constructor(props){
      //boilerplate
      super(props);
      //set initial state of object
      this.state = {number: props.number, pokemon: props.pokemon, alt: props.alt, src: props.src, classtype: props.classtype, type: props.type};
    }

    render(){
      //return JSX element
      let pokemondata = [
        {number: "1", pokemon: "Bulbasaur", alt: "Bulbasaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", classtype: "grass", type: "grass type", completed: false},
        {number: "2", pokemon: "Ivysaur", alt: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", classtype: "grass", type:"grass type", completed: false},
        {number: "3", pokemon: "Venusaur", alt:"Venusaur", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png", classtype:"grass", type:"grass type", completed: false},
        {number: "4", pokemon: "Charmander", alt:"Charmander", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png", classtype:"fire type", type:"fire", completed: false},
        {number: "5", pokemon: "Charmeleon", alt:"Charmeleon", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png", classtype:"fire type", type:"fire", completed: false},
        {number: "6", pokemon: "Charizard", alt:"Charizard", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png", classtype:"fire type", type:"fire", completed: false},
        {number: "7", pokemon: "Squirtle", alt:"Squirtle", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", classtype:"water type", type:"water", completed: false},
        {number: "8", pokemon: "Wartole", alt:"Wartole", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png", classtype:"water type", type:"water", completed: false},
        {number: "9", pokemon: "Blastoise", alt:"Blastoise", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png", classtype:"water type", type:"water", completed: false}, 
        {number: "10", pokemon: "Caterpie", alt:"Caterpie", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png", classtype:"bug type", type:"bug", completed: false},
        {number: "11", pokemon: "Metapod", alt:"Metapod", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png", classtype:"bug type", type:"bug", completed: false},
        {number: "12", pokemon: "Butterfree", alt:"Butterfree", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png", classtype:"bug type", type:"bug", completed: false},
      ];
    
      let pokemonex = pokemondata.map(function(pokemonArray){
        return (<Pokedex number={pokemonArray.number} name={pokemonArray.pokemon} alt={pokemonArray.alt} src={pokemonArray.src} back_image_url={pokemonArray.back_image_url} classtype={pokemonArray.classtype} type={pokemonArray.type} completed={pokemonArray.completed}></Pokedex>)
      });
    
      return(
        <div>
         { pokemonex }
        </div>
      )
    }
}

function App() {
  return (
    <div className="App">
        <h1>Pokedex</h1>

        <PokemonListArray></PokemonListArray>
    </div>
  );
}

export default App;
