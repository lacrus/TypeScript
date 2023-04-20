import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokeId: number): Promise<Pokemon> => {
  const { data } = await axios<Pokemon>({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + pokeId,
  });
  //   console.log(data.name);
  return data;
};
