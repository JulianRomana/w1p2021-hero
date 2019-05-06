<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/where">Continuer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Forêt de la mort qui tue"
    };
  }
};
</script>
