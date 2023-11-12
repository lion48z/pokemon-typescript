
import React from 'react';

interface PokemonListProps {
  pokemon: string[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <ul className="list-group">
      {pokemon.map((name, index) => (
        <li key={index} className="list-group-item">
          <h4 className="mb-0">{name}</h4>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
