import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonOptions", () => {
  test("Should return numbers array", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
  });

  test("Should return an array with four elements and their own names", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual([
      { name: "bulbasaur", id: 1 },
      { name: "ivysaur", id: 2 },
      { name: "venusaur", id: 3 },
      { name: "charmander", id: 4 },
    ]);
  });

  test("getPokemonOptions should return a mixed array", async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
