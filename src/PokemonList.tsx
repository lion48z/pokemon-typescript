// PokemonList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface PokemonListProps {
  pokemon: string[];
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await Promise.all(
        pokemon.map(async (name) => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
          return response.data;
        })
      );
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [pokemon]);

  return (
    <Row className="mx-auto mt-3">
      {pokemonData.map((data, index) => (
        <Col key={index} xs={6} sm={4} md={3} lg={3} xl={2} className="mb-3">
          <Card>
            <Card.Img variant="top" src={data.sprites.front_default} alt={data.name} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
