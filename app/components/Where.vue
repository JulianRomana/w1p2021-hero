<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <router-link class="button" to="/Chill">Village caché du sable</router-link>
    <router-link class="button" to="/Dangerous">Forêt de la mort</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Où souhaitez vous aller ?'
    };
  }
};
</script>
