c<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <h2>{{ thanks }}</h2>
    <router-link class="button" to="/">Recommencer</router-link>
    <video src="/assets/videos/win.mp4" autoplay width="1440" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Tu as retrouvé Sarutobi !',
      thanks: 'Merci d\'avoir joué à notre Jeu ! '
    };
  }
};
</script>
<style scoped>
.big-header {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Permanent Marker";
}
video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
h1 {
  z-index: 2;

  color: white;
  text-transform: uppercase;
  font-size: 40px;
}
h2 {
  z-index: 2;
  color: white;
  text-transform: uppercase;
  font-size: 25px;
  margin-top: 20px;
}
.button {
  z-index: 2;
  bottom: 7%;
  position: fixed;
  margin-right: 0;
  margin-left: 0;
}
</style>

