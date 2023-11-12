
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

interface HeaderProps {
  logoUrl: string | ((pokemonName: string) => string);
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const imageUrl = typeof logoUrl === 'function' ? (logoUrl as (pokemonName: string) => string)('') : logoUrl;

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center" >
      <Navbar.Brand >
        <img
          alt="Pokémon Logo"
          src={imageUrl}
         
          className="d-inline-block align-top img-fluid"
        />
       
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;

