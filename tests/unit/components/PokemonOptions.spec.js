import { pokemons } from "../mocks/pokemons.mock";
import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";

describe("PokemonOptions component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("Should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show 4 options correctly", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags.length).toBe(4);
    expect(liTags[0].text()).toBe("bulbasaur");
    expect(liTags[1].text()).toBe("ivysaur");
    expect(liTags[2].text()).toBe("venusaur");
    expect(liTags[3].text()).toBe("charmander");
  });

  test('Should emit "selection" with parameters when you use a click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");
    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");
    expect(wrapper.emitted("selection-pokemon").length).toBe(4);
    expect(wrapper.emitted("selection-pokemon")[0]).toEqual([1]);
    expect(wrapper.emitted("selection-pokemon")[1]).toEqual([2]);
    expect(wrapper.emitted("selection-pokemon")[2]).toEqual([3]);
    expect(wrapper.emitted("selection-pokemon")[3]).toEqual([4]);
  });
});
