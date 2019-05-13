<template>
  <div>
    <h1>{{ character.name }}</h1>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
<script>
export default {
  props: ["character"]
};
</script>
