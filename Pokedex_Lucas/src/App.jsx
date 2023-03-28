import { useState } from "react";
import PokemonCard from "./components/PokemonCard";


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "MEW",
    },
  ];

  const [indexPokemon,setIndexPokemon]= useState(0);

  const handleClickNext = () => {
    setIndexPokemon(indexPokemon + 1)
  }
  const handleClickBack = () => {
    setIndexPokemon(indexPokemon - 1)
  }


  return (
    <div>
      <PokemonCard name={pokemonList[indexPokemon].name} img= {pokemonList[indexPokemon].imgSrc} />
      {(indexPokemon > 0) ?(<button onClick={handleClickBack}>Back</button>) : ""}
      {(indexPokemon < pokemonList.length - 1) ? (<button onClick={handleClickNext}>Next</button>) : "" } 
    </div>
  )
}

export default App;