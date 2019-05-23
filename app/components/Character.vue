<template>
  <div class="character">
    <h2>{{ character.name }}</h2>
    <img :class="character.class" :src="character.image" alt="Ninja" @click="choose(character)">
  </div>
</template>

<style lang="scss" scoped>
h2 {
  color: white;
  font-size: 50px;
}
.character {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 50vw;
}

.characterz {
  top: 25%;
  transition: 0.2s;
}

.characterz:hover {
  transform: scale(1.1);
}
</style>
<script>
export default {
  props: ['character'],
  methods: {
    choose() {
      localStorage.setItem('character', this.character.name);
      localStorage.setItem('characterImage', this.character.image);
      localStorage.setItem('characterClass', this.character.class);
      localStorage.setItem('characterSound', this.character.sound);
      this.$router.push({ name: 'game', params: { id: 1 } });
    }
  }
};
</script>
