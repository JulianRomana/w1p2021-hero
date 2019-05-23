<template>
  <div class="screen">
    <div class="flex">
      <h1>{{ message }}</h1>
      <br>
      <img class="rouleau" :src="instructions">
      <router-link class="button" to="/characters">Jouer</router-link>
    </div>
    <img class="shika" :src="shikamaru">
    <div>
      <audio controls preload="auto" autoplay>
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
</style>
<script>
import game from '../assets/data/data.js';
const homepageImage = require('../assets/pictures/*.png');
export default {
  data() {
    return {
      message: 'Aidez naruto à retrouvez Sarutobi',
      game: game,
      instructions: homepageImage.rouleau,
      shikamaru: homepageImage.shikamaru
    };
  },
  mounted() {
    console.log(this.shikamaru);
  }
};
</script>
