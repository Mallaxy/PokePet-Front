import axios from 'axios'

export const pokemonInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://pokeapi.co/api/v2/',
})
