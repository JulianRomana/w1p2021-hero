<template>
  <div class="big-header">
    <h1>Choix du perso</h1>
    <br>
    <section class="characters">
      <Character v-for="character in characters" :key="character.name" :character="character"/>
    </section>
    <router-link class="button" to="/where">Jouer</router-link>
  </div>
</template>
<script>
import Character from "./Character.vue";
export default {
  components: {
    Character
  },
  data: function() {
    return {
      characters: [
        {
          name: "Naruto",
          image: require("../assets/pictures/naruto.png"),
          class: "naruto_character",
          selected: false
        },
        {
          name: "Sasuke",
          image: require("../assets/pictures/sasuke.png"),
          class: "sasuke_character",
          selected: false
        }
      ]
    };
  }
};
</script>
