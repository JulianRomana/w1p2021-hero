<template>
  <div class="big-header">
    <h1>Choix du perso</h1>
    <br>
    <section class="character">
      <Character v-for="character in characters" :key="character.name" :character="character" />
    </section>
    <router-link class="button" to="/where">Jouer</router-link>
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
          name: 'Naruto'
        },
        {
          name: 'Sasuke'
        }
      ]
    };
  }
};
</script>
