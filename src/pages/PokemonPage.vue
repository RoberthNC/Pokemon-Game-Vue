<template>
  <h1>¿Quién es este Pokémon?</h1>
  <PokemonImage :pokemonId="4" :showPokemon="true" />
  <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions.js";

export default {
  name: "PokemonPage",
  components: {
    PokemonImage,
    PokemonOptions,
  },
  data() {
    return {
      pokemonArr: [],
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      console.log(this.pokemonArr);
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
