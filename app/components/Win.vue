c<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/">Recommencer</router-link>
    <video src="/assets/videos/win.mp4" autoplay width="1440"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Tu as retrouvé Sarutobi !"
    };
  }
};
</script>
<style>
video {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

