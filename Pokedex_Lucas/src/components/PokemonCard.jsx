

function PokemonCard(pokemon){

    return (
      <figure>
        {pokemon.img ? (<img src = {pokemon.img} alt={pokemon.name}/>): (<p>???</p>)}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
      

    
}


export default PokemonCard;