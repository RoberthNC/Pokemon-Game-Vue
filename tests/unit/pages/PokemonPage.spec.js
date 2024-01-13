import { pokemons } from "../mocks/pokemons.mock";
import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage.vue";

describe("PokemonPage component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("Should match with snapshot", () => {
    // expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should call mixPokemonArray when the componentn is mounted", () => {
    const mixPokemonArray = jest.spyOn(PokemonPage.methods, "mixPokemonArray");
    shallowMount(PokemonPage);
    expect(mixPokemonArray).toHaveBeenCalled();
  });

  test("Should match with snapshot when pokemons load", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show PokemonImage and PokemonOptions components", () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.find("pokemon-image-stub").exists()).toBeTruthy();
    expect(wrapper.find("pokemon-options-stub").exists()).toBeTruthy();
    expect(wrapper.find("pokemon-image-stub").attributes("pokemonid")).toBe(
      "1"
    );
    expect(
      wrapper.find("pokemon-options-stub").attributes("pokemons")
    ).toBeTruthy();
  });

  test("Testing on checkAnswer", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    await wrapper.vm.checkAnswer(1);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.find("h2").text()).toBe(
      `Correcto! Es un ${pokemons[0].name}`
    );
    await wrapper.vm.checkAnswer(10);
    expect(wrapper.vm.message).toBe(`Oops! Era un ${pokemons[0].name}`);
  });
});
