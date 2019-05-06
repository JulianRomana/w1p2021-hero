<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/end">Continuer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Suna'
    };
  }
};
</script>
