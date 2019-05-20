<template>
  <div class="character">
    <h2>{{ character.name }}</h2>
    <h3 v-if="character.selected">Selected</h3>
    <img
      v-bind:class="[character.class, {selected : character.selected }]"
      :src="character.image"
      alt="Ninja"
      @click="choose(character)"
    >
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
  props: ["character"],
  methods: {
    choose(character) {
      character.selected = true;
      console.log(character);
    }
  }
};
</script>
