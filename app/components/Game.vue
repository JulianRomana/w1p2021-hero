<template>
  <div class="screen" :style="getImage(step.step.img)">
    <h1>{{ step.step.name }}</h1>
    <div class="image-wrapper">
      <div class="speech-bubble">
        <p>{{ step.step.caption }}</p>
      </div>
      <img :class="characterClass" :src="characterImage" alt>
    </div>
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


<style lang="scss" scoped>
.image-wrapper {
  position: absolute;
  left: 0;
  top: 280px;
  img {
    font-size: 30px;
  }
}
.speech-bubble {
  position: absolute;
  top: -70px;
  right: -290px;
  background: rgb(244, 237, 212);
  border-radius: 0.4em;
  width: 280px;
  height: 180px;
  font-size: 25px;
  p {
    margin: 25px 10px 0px 10px;
  }
}

.speech-bubble:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: rgb(244, 237, 212);
  border-left: 0;
  border-bottom: 0;
  margin-top: -10px;
  margin-left: -20px;
}
.screen {
  background-size: cover;
  background-repeat: no-repeat;
}
.parchemin {
  width: 100px;
}
.naruto_character {
  width: 300px;
}
.sasuke_character {
  width: 300px;
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
        this.step.step.caption = 'coucou';
        localStorage.removeItem('parchemin');
      }
      if (localStorage.getItem('path')) {
      }
      this.step = this.getStep();
      if (this.step.step.id === 7.4) {
        this.$router.push({ path: '/win' });
      }
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
