import { useEffect } from "react";


function NavBar({indexPokemon,setIndexPokemon,pokemonList}){;
    function  handleClickNext() {
        setIndexPokemon(indexPokemon + 1)
      }
      function handleClickBack()  {
        setIndexPokemon(indexPokemon - 1)
      }
    useEffect(
      () => {
        {(indexPokemon === 3) ? (alert('Pika Pikachu !!!')) : ""}
      },
    )
      return (
        <>
        {(indexPokemon > 0) ?(<button onClick={handleClickBack}>Back</button>) : ""}
        {(indexPokemon < pokemonList.length - 1) ? (<button onClick={handleClickNext}>Next</button>) : "" }
        {/* {(indexPokemon === 3) ? (alert('Pikachu')) : ""} */}
        </>
      )
}

export default NavBar;