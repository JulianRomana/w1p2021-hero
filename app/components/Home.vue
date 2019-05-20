<template>
  <div class="screen">
    <div class="flex">
      <h1>{{ message }}</h1>
      <br>
      <img class="rouleau" src="/assets/pictures/rouleau.png">
      <router-link class="button" to="/characters">Jouer</router-link>
    </div>
    <img class="shika" src="/assets/pictures/shikamaru.png">
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
