<template>
  <div class="screen" :style="getImage(step.step.img)">
    <h1>{{ step.step.name }}</h1>
    <div class="image-wrapper">
      <div class="speech-bubble">
        <p>{{ step.step.caption }}</p>
      </div>
      <img :class="characterClass" :src="characterImage" alt>
    </div>
    <img :class="step.step.class" :src="step.step.element" alt @click="takeParchemin()">
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
      <div :class="step.step.button" alt @click="randomHit()">{{ step.step.fightButton }}</div>
    </div>
    <div class="inventory">
      <h2>Inventaire</h2>
      <img class="is-hidden" :class=" {active: isActive}" :src="inventoryParchemin" alt>
      <img class="is-hidden" :class=" {active2: isActive2}" :src="inventoryParchedeux" alt>
    </div>
    <div :class="{noFog: noFog}">
      <img :class=" step.step.class" :src="step.step.blockingElement">
    </div>
    <div>
      <audio id="player" :src="step.step.music" autoplay />
      <img class="pause" src="/assets/pictures/pause.svg" alt @click="pause()">
      <img class="play" src="/assets/pictures/play.svg" alt @click="play()">
      <img class="sound" src="/assets/pictures/sound.svg">
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
  right: 30%;
  width: 60px;
  transform: scaleX(-1);
  cursor: pointer;
  transition: 0.4s;
  animation: items 1s linear infinite;
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
  top: 100px;
  right: 23%;
  width: 350px;
  transform: scaleX(-1);
}
.sasori {
  position: absolute;
  top: 150px;
  right: 25%;
  width: 350px;
}
.pain {
  position: absolute;
  top: 130px;
  right: 18%;
  width: 300px;
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
  width: 50px;
  opacity: 0;
}
.active {
  opacity: 1;
}
.active2 {
  opacity: 1;
}
.buttonFight {
  color: #083b77;
  text-decoration: none;
  background: #ea7739f3;
  padding: 20px 35px 20px 35px;
  border-radius: 5px;
  font-size: 30px;
  display: inline-block;
  cursor: pointer;
}

.buttonFight:hover {
  transform: scale(1.1);
  transition: 0.2s;
}

.fog {
  position: relative;
  top: -8.9vh;
  z-index: 2;
  background-color: rgba(60, 60, 60, 0.632);
}
.noFog {
  display: none;
}
.ramen {
  width: 400px;
  position: absolute;
  top: 180px;
  right: 20%;
  transition: 0.4s;
  animation: items 1s linear infinite;
}
.orochimaru {
  position: absolute;
  top: 130px;
  right: 18%;
  width: 400px;
}
.sarutobi {
  position: absolute;
  top: 130px;
  right: 18%;
  width: 300px;
}
.pause {
  position: absolute;
  top: 40px;
  left: 80px;
  width: 40px;
}
.play {
  display: none;
  position: absolute;
  top: 40px;
  left: 80px;
  width: 40px;
}
.sound {
  position: absolute;
  top: 40px;
  left: 20px;
  width: 45px;
}
@keyframes items {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
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
      inventoryParchemin: game.phases[3].element,
      inventoryParchedeux: game.phases[9].element,
      isActive: false,
      noFog: false,
      isActive2: false
    };
  },
  watch: {
    '$route.params.id'(to, from) {
      const local = localStorage.getItem('parchemin');
      if (local) {
        this.step.step.caption = 'Allons retrouver ce chemin';
        localStorage.removeItem('parchemin');
      }
      this.step = this.getStep();
      if (this.step.step.id === 8.1) {
        this.$router.push({ name: 'win' });
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
      this.step.step.element = '';
      if (this.step.step.id === 2.2) {
        this.noFog = true;
        this.isActive = true;
      }
      if (this.step.step.id === 3.2) {
        this.isActive2 = true;
      }
      this.step.step.caption =
        'J\'en trouverai surêment d\'autres pendant le voyage';
      game.phases[29].caption =
        'Je peux enfin passer ! C\'est sûrement un raccourci';
    },
    changePath(action) {
      this.$router.push({ name: 'game', params: { id: action.to } });
    },
    getImage: function(url) {
      return {
        'background-image': 'url("' + url + '")'
      };
    },
    randomHit() {
      let you = 0;
      let enemy = 0;
      function getRandomInt(max) {
        you = Math.floor(Math.random() * Math.floor(max));
        enemy = Math.floor(Math.random() * Math.floor(max));
        localStorage.setItem('myNumber', you);
        localStorage.setItem('enemyNumber', enemy);
        console.log(you, enemy);
      }
      getRandomInt(6);
      if (this.step.step.id === 2.4) {
        if (you >= enemy) {
          this.$router.push({ name: 'game', params: { id: 2.5 } });
        } else {
          this.$router.push({ name: 'loose' });
        }
      } else if (this.step.step.id === 3.4) {
        if (you >= enemy) {
          this.$router.push({ name: 'game', params: { id: 3.5 } });
        } else {
          this.$router.push({ name: 'loose' });
        }
      } else if (this.step.step.id === 5.3) {
        if (you >= enemy) {
          this.$router.push({ name: 'game', params: { id: 5.4 } });
        } else {
          this.$router.push({ name: 'loose' });
        }
      } else if (this.step.step.id === 7.3) {
        if (you >= enemy) {
          this.$router.push({ name: 'game', params: { id: 7.4 } });
        } else {
          this.$router.push({ name: 'loose' });
        }
      }
    },
    pause() {
      document.getElementById('player').pause();
      document.querySelector('.pause').style.display = 'none';
      document.querySelector('.play').style.display = 'block';
    },
    play() {
      document.getElementById('player').play();
      document.querySelector('.play').style.display = 'none';
      document.querySelector('.pause').style.display = 'block';
    }
  }
};
</script>
