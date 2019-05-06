<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Eh oh coquin qu\'est ce que tu fais là'
    };
  }
};
</script>
