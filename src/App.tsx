import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';


interface AppProps {}
function noop() {}

const App: React.FC<AppProps> = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      <PokemonList pokemon={pokemon} />
      <Pagination 
      gotoNextPage={nextPageUrl ? goToNextPage : noop}
      gotoPrevPage={prevPageUrl ? goToPrevPage : noop}
      />
    </>
  );
};

export default App;



