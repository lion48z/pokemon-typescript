import React from 'react'
interface PokemonListProps {
    pokemon: string[];
}
const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
   
  return (
    <div>
      {pokemon.map((p:string) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}

export default PokemonList
