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
.character {
  display: flex;
  flex-direction: row-reverse;
  margin-left: 34%;
}
.naruto_character {
  padding-top: 100px;
}
.sasuke_character {
  padding-top: 100px;
}
</style>
<script>
export default {
  props: ["character"],
  methods: {
    choose() {
      localStorage.setItem("character", this.character.name);
      localStorage.setItem("characterImage", this.character.image);
      localStorage.setItem("characterClass", this.character.class);
      localStorage.setItem("characterClass", this.character.sound);
      this.$router.push({ name: "game", params: { id: 1 } });
    }
  }
};
</script>
