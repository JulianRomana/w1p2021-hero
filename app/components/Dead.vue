<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/">Return to home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Tu es mort par un ninja du son '
    };
  }
};
</script>
