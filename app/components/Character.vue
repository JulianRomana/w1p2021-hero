<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <section class="character">
      <div class="character__one">Naruto</div>
      <div class="character__two">Sasuke</div>
    </section>
    <router-link class="button" to="/where">Jouer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Choisissez votre personnage'
    };
  }
};
</script>
