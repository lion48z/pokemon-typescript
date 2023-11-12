import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
  
      setPokemon(res.data.results.map((p: { name: string }) => p.name));
    });
  }, []); 
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;



