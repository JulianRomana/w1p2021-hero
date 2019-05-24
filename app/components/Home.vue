<template>
  <div class="screen">
    <link rel="preload" as="image" :href="homepageImage">
    <div>
      <img class="pause" src="/assets/pictures/pause.svg" alt @click="pause()">
      <img class="play" src="/assets/pictures/play.svg" alt @click="play()">
      <img class="sound" src="/assets/pictures/sound.svg">
    </div>
    <div class="flex">
      <h1>{{ message }}</h1>
      <br>
      <img class="rouleau" :src="instructions">
      <router-link class="button" to="/characters">Jouer</router-link>
    </div>
    <img class="shika" :src="shikamaru">
    <div>
      <audio id="player" controls preload="auto" autoplay>
        <source src="../assets/musics/badSituation.mp3">
      </audio>
    </div>
  </div>
</template>
<style scoped>
.screen {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/pictures/valle.jpg");
}
h1 {
  padding-top: 50px;
}
.shika {
  transform: scaleX(-1);
  transform: scaleX(-1);
  width: 20%;
  position: absolute;
  left: 100px;
  top: 100px;
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rouleau {
  width: 49%;
  margin-left: 180px;
}
.button {
  margin-top: -80px;
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
import game from "../assets/data/data.js";
const homepageImage = require("../assets/pictures/*.png");
export default {
  data() {
    return {
      message: "Aidez naruto à retrouvez Sarutobi",
      game: game,
      instructions: homepageImage.rouleau,
      shikamaru: homepageImage.Shikamaru,
      homepageImage: homepageImage
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
