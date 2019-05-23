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
    <div :class="step.step.button" alt @click="randomHit()">{{ fightButton }}</div>
    <img :class="step.step.class" :src="step.step.enemy">
    <div class="containerButton">
      <div
        v-for="action in step.step.paths"
        :key="action.name"
        class="button"
        @click="changePath(action)"
      >
{{ action.name }}
</div>
    </div>
    <div class="inventory">
      <h2>inventory</h2>
      <img class="is-hidden" :class=" {active: isActive}" :src="inventoryParchemin" alt>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.image-wrapper {
  position: absolute;
  left: 0;
  top: 180px;
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
  display: flex;
  align-items: center;
  p {
    margin: 0px 10px 0px 10px;
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
  position: absolute;
  top: 180px;
  right: 20%;
  width: 250px;
  transform: scaleX(-1);
}
.hoodedman {
  position: absolute;
  top: 180px;
  right: 23%;
  width: 250px;
  transform: scaleX(-1);
}
.zabuza {
  position: absolute;
  top: 800px;
  right: 23%;
  width: 300px;
  transform: scaleX(-1);
}
.sasori {
  position: absolute;
  top: 150px;
  right: 25%;
  width: 350px;
}
.naruto_character {
  width: 300px;
}
.sasuke_character {
  width: 300px;
}
.inventory {
  position: absolute;
  top: 5%;
  right: 5%;
}
.is-hidden {
  width: 80px;
  opacity: 0;
}
.active {
  opacity: 1;
}
.buttonFight {
  color: #083b77;
  text-decoration: none;
  background: #ea7739f3;
  padding: 25px 60px 25px 60px;
  border-radius: 5px;
  font-size: 30px;
  display: inline-block;
  cursor: pointer;
  position: absolute;
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
      characterClass: localStorage.getItem('characterClass'),
      inventoryParchemin: localStorage.getItem('inventoryParchemin')
    };
  },
  watch: {
    '$route.params.id'(to, from) {
      const local = localStorage.getItem('parchemin');
      if (local) {
        this.step.step.caption = 'Allons retrouver ce chemin';
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
  mounted() {},
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
      localStorage.setItem('inventoryParchemin', game.phases[3].element);
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
