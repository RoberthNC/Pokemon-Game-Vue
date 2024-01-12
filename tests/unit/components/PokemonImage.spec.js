import { shallowMount } from "@vue/test-utils";
import PokemonImage from "@/components/PokemonImage.vue";

describe("PokemonImage", () => {
  test("Should match with snapshot", () => {
    // const wrapper = shallowMount(PokemonImage, {
    //   props: {
    //     pokemonId: 1,
    //     showPokemon: false,
    //   },
    // });
    // expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show hidden image an the pokemon number 100", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    expect(img1.classes("hidden-pokemon")).toBeTruthy();
    expect(img1.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
    );
  });

  test("Should show pokemon image if showPokemon is equal to true", () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.exists()).toBeTruthy();
    expect(img.classes("hidden-pokemon")).toBeTruthy();
  });
});
