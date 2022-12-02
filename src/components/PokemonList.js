import React from "react";
import shortid from "shortid"

const PokemonList = ({ pokemon }) => {
    
  return (
    <div>
      {pokemon.map((name)=><div key={shortid.generate()}>{name} </div>)}
    </div>
  );
};

export default PokemonList;
