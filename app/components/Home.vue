<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/character">Jouer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Aidez naruto à retrouvez Sarutobi'
    };
  }
};
</script>
