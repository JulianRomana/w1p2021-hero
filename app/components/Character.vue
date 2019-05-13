<template>
  <div>
    <h2>{{ character.name }}</h2>
  </div>
</template>
<style scoped>
h2 {
  color: white;
  font-size: 50px;
}
</style>
<script>
export default {
  props: ['character']
};
</script>
