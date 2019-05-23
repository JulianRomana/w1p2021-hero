c<template>
  <div class="screen">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/">Recommencer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'T\'es mort !'
    };
  }
};
</script>
