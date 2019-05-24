<template>
  <div class="screen">
    <h1>Choix du perso</h1>
    <br>
    <section class="characters">
      <Character v-for="character in characters" :key="character.name" :character="character"/>
    </section>
    <audio id="player" controls preload="auto" autoplay>
      <source src="../assets/musics/enjaille.mp3">
    </audio>
    <div>
      <img class="pause" src="/assets/pictures/pause.svg" alt @click="pause()">
      <img class="play" src="/assets/pictures/play.svg" alt @click="play()">
      <img class="sound" src="/assets/pictures/sound.svg">
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

.pause {
  position: absolute;
  top: 40px;
  left: 80px;
  width: 40px;
}
.play {
  display: none;
  position: absolute;
  top: 40px;
  left: 80px;
  width: 40px;
}
.sound {
  position: absolute;
  top: 40px;
  left: 20px;
  width: 45px;
}
</style>
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
          class: "naruto_character characterz",
          sound: require("../assets/musics/gogo.mp3")
        },
        {
          name: "Sasuke",
          image: require("../assets/pictures/sasuke.png"),
          class: "sasuke_character characterz",
          sound: require("../assets/musics/badSituation.mp3")
        }
      ]
    };
  },
  methods: {
    pause() {
      document.getElementById("player").pause();
      document.querySelector(".pause").style.display = "none";
      document.querySelector(".play").style.display = "block";
    },
    play() {
      document.getElementById("player").play();
      document.querySelector(".play").style.display = "none";
      document.querySelector(".pause").style.display = "block";
    }
  }
};
</script>
