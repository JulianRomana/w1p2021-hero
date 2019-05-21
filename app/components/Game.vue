<template>
  <div class="screen" :style="getImage(step.step.img)">
    <h1>{{ step.step.name }}</h1>
    <h2>{{ step.step.to }}</h2>
    <img :class="characterClass" :src="characterImage" alt>
    <img class="parchemin" :src="step.step.element" alt @click="takeParchemin()">
    <div
      v-for="action in step.step.paths"
      :key="action.name"
      class="button"
      @click="changePath(action)"
    >
{{ action.name }}
</div>
  </div>
</template>


<style scoped>
.screen {
  background-size: cover;
  background-repeat: no-repeat;
}
.parchemin {
  width: 100px;
}
.naruto_character {
  width: 300px;
  position: absolute;
  left: 0;
  top: 200px;
}
.sasuke_character {
  width: 300px;
  position: absolute;
  left: 0;
  top: 200px;
}
</style>
<script>
import game from '/assets/data/data.js';
import getParchemin from '/services/functions';

export default {
  data: function() {
    return {
      step: this.getStep(),
      characterImage: localStorage.getItem('characterImage'),
      characterClass: localStorage.getItem('characterClass')
    };
  },
  watch: {
    '$route.params.id'(to, from) {
      const local = localStorage.getItem('parchemin');
      if (local) {
        alert('vous avez récupéré le parchemin du brouillard ');
        localStorage.removeItem('parchemin');
      }
      if (localStorage.getItem('path')) {
      }
      this.step = this.getStep();
    }
  },
  methods: {
    getStep() {
      return {
        step: game.phases.find(
          step => step.id === Number(this.$route.params.id)
        )
      };
    },
    takeParchemin() {
      getParchemin.took();
      this.step.step.element = '';
    },
    changePath(action) {
      this.$router.push({ name: 'game', params: { id: action.to } });
    },
    getImage: function(url) {
      return {
        'background-image': 'url("' + url + '")'
      };
    }
  }
};
</script>
