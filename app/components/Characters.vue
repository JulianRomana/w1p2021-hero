<template>
  <div class="screen">
    <h1>Choix du perso</h1>
    <br>
    <section class="characters">
      <Character v-for="character in characters" :key="character.name" :character="character" />
    </section>
  </div>
</template>
<style scoped>
.screen {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/assets/pictures/valle.jpg");
}
</style>
<script>
import Character from './Character.vue';
export default {
  components: {
    Character
  },
  data: function() {
    return {
      characters: [
        {
          name: 'Naruto',
          image: require('../assets/pictures/naruto.png'),
          class: 'naruto_character'
        },
        {
          name: 'Sasuke',
          image: require('../assets/pictures/sasuke.png'),
          class: 'sasuke_character'
        }
      ]
    };
  }
};
</script>
