<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/">Recommencer</router-link>
  </div>
</template>
<script>
import game from '../';

export default {
  data() {
    return {
      message: 'Eh oh coquin qu\'es ce que tu fais là'
    };
  }
};
</script>
