import { getPokemon } from "./generics/getPokemon";

getPokemon(5)
  .then((pokemon) => console.log(pokemon))
  .catch((i) => console.log(i))
  .finally(() => console.log("fin de getPokemon"));
 