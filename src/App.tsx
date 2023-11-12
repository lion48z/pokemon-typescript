import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';
import Header from './Header';


interface AppProps {}
function noop() {}

const App: React.FC<AppProps> = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const pokemonLogoUrl =(pokemonName:string):string => {
    return `https://th.bing.com/th/id/OIP.3ooPgvFEm0j3GCjt4Rbs2QHaCq?w=347&h=126&c=7&r=0&o=5&pid=1.7`
  }

  useEffect(() => {
    
    axios.get<{ next: string | null; previous: string | null; results: { name: string }[] }>(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
  
      setPokemon(res.data.results.map((p: { name: string }) => p.name));
    });
  }, [currentPageUrl]);
  function goToNextPage() {
    if (nextPageUrl) setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    if (prevPageUrl) setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <>
    <Header logoUrl={pokemonLogoUrl} />
      <PokemonList pokemon={pokemon} />
      <Pagination 
      gotoNextPage={nextPageUrl ? goToNextPage : noop}
      gotoPrevPage={prevPageUrl ? goToPrevPage : noop}
      />
    </>
  );
};

export default App;



