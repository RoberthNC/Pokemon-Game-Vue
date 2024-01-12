import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("Testing on App.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  test("App.vue should be equal to snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
