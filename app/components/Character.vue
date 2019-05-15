<template>
  <div>
    <h2>{{ character.name }}</h2>
    <img :src="character.image" alt="Ninja" @click="choose">
  </div>
</template>
<style scoped>
h2 {
  color: white;
  font-size: 50px;
}
img {
  width: 50%;
}
</style>
<script>
export default {
  props: ['character'],
  methods: {
    choose() {
      let currentCharacter = 'default';
      let memo;
      currentCharacter = this.character.name;
      console.log(this.character.image);
    }
  }
};
</script>
