<template>
  <div class="screen">
    <h1>Choix du perso</h1>
    <br>
    <section class="characters">
      <Character v-for="character in characters" :key="character.name" :character="character" />
    </section>
    <audio id="player" controls preload="auto" autoplay>
      <source src="../assets/musics/enjaille.mp3">
    </audio>
    <div>
      <img class="pause" src="/assets/pictures/pause.svg" alt @click="pause()">
      <img class="play" src="/assets/pictures/play.svg" alt @click="play()">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.screen {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/assets/pictures/valle.jpg");
  background-position: center;
}
audio {
  display: none;
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
          class: 'naruto_character characterz',
          sound: require('../assets/musics/gogo.mp3')
        },
        {
          name: 'Sasuke',
          image: require('../assets/pictures/sasuke.png'),
          class: 'sasuke_character characterz',
          sound: require('../assets/musics/badSituation.mp3')
        }
      ]
    };
  },
  methods: {
    pause() {
      const but = document.querySelector('.pause');
      but.addEventListener('click', () => {
        document.getElementById('player').pause();
      });
    },
    play() {
      const but = document.querySelector('.play');
      but.addEventListener('click', () => {
        document.getElementById('player').play();
      });
    }
  }
};
</script>
