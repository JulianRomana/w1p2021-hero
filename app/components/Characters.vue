<template>
  <div class="big-header">
    <h1>Choix du perso</h1>
    <br>
    <section class="character">
      <Character v-for="character in characters" :key="character.name" :character="character" />
    </section>
    <router-link class="button" to="/game/1">Jouer</router-link>
  </div>
</template>
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
          image: require('../assets/pictures/naruto.png')
        },
        {
          name: 'Sasuke',
          image: require('../assets/pictures/sasuke.png')
        }
      ]
    };
  }
};
</script>
