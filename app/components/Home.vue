<template>
  <div class="screen">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/characters">Jouer</router-link>
    <img class="shika" src="/assets/pictures/shikamaru.png">
    <p></p>
    <img class="rouleau" src="/assets/pictures/rouleau.png">
  </div>
</template>
<style scoped>
.screen {
  background-image: url("/assets/pictures/valle.jpg");
  background-size: cover;
  background-repeat: no-repeat;
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
.rouleau {
  position: absolute;
  width: 60%;
  left: 400px;
}
</style>

<style scoped>
h2 {
  color: white;
  font-size: 50px;
}
</style>
<script>
export default {
  data() {
    return {
      message: "Aidez naruto à retrouvez Sarutobi"
    };
  }
};
</script>
