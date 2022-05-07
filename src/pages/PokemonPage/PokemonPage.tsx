import React from 'react'
import { pokemonInstance } from '../../services/axios'

export const PokemonPage = () => {
  const getPokemons = async () => {
    const response = await pokemonInstance.get('pokemons/')
  }

  return <div>Pokemon page</div>
}
