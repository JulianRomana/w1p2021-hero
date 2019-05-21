<template>
  <div class="character">
    <h2>{{ character.name }}</h2>
    <h3 v-if="character.selected">Selected</h3>
    <img :class="character.class" :src="character.image" alt="Ninja" @click="choose(character)">
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
  props: ['character'],
  methods: {
    choose() {
      localStorage.setItem('character', this.character.name);
    }
  }
};
</script>
