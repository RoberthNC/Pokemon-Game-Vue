import pokemonApi from "@/api/pokemonApi";

describe("PokemonApi", () => {
  test("baseURL should be configured with Pokémon API", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
