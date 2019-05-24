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
    <img :class="step.step.class" :src="step.step.enemy">
    <div class="containerButton">
      <div
        v-for="action in step.step.paths"
        :key="action.name"
        class="button"
        @click="changePath(action)"
      >{{ action.name }}</div>
      <div :class="step.step.button" alt @click="randomHit()">{{ step.step.fightButton }}</div>
    </div>
    <div class="inventory">
      <h2>Inventaire</h2>
      <img class="is-hidden" :class=" {active: isActive}" :src="inventoryParchemin" alt>
    </div>
    <div class="fog" :class="{noFog: noFog }">
      <img :src="step.step.blockingElement">
    </div>
    <audio :src="step.step.music" autoplay></audio>
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
  width: 100vw;
  height: 100vw;
}
.noFog {
  display: none;
}
</style>
<script>
import game from "/assets/data/data.js";
import getParchemin from "/services/functions";

export default {
  data: function() {
    return {
      step: this.getStep(),
      characterImage: localStorage.getItem("characterImage"),
      characterClass: localStorage.getItem("characterClass"),
      inventoryParchemin: game.phases[3].element,
      isActive: false,
      noFog: false
    };
  },
  watch: {
    "$route.params.id"(to, from) {
      const local = localStorage.getItem("parchemin");
      if (local) {
        this.step.step.caption = "Allons retrouver ce chemin";
        localStorage.removeItem("parchemin");
      }
      this.step = this.getStep();
<<<<<<< HEAD
      if (this.step.step.id === 7.4) {
        this.$router.push({ path: "/win" });
      }
=======
>>>>>>> 187c87b4116baef87dad2195b3b347ad5c507cd1
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
      this.step.step.element = "";
      this.isActive = true;
      if (this.step.step.id === 2.2) {
        this.noFog = true;
      }
    },
    changePath(action) {
      this.$router.push({ name: "game", params: { id: action.to } });
    },
    getImage: function(url) {
      return {
        "background-image": 'url("' + url + '")'
      };
    },
    randomHit() {
      let you = 0;
      let enemy = 0;
      function getRandomInt(max) {
        you = Math.floor(Math.random() * Math.floor(max));
        enemy = Math.floor(Math.random() * Math.floor(max));
      }
      getRandomInt(6);
      if (this.step.step.id === 2.4) {
        if (you >= enemy) {
          this.$router.push({ name: "game", params: { id: 2.5 } });
        } else {
          this.$router.push({ name: "loose" });
        }
      } else if (this.step.step.id === 3.4) {
        if (you >= enemy) {
          this.$router.push({ name: "game", params: { id: 3.5 } });
        } else {
          this.$router.push({ name: "loose" });
        }
      } else if (this.step.step.id === 5.3) {
        if (you >= enemy) {
          this.$router.push({ name: "game", params: { id: 5.4 } });
        } else {
          this.$router.push({ name: "loose" });
        }
      } else if (this.step.step.id === 7.3) {
        if (you >= enemy) {
          this.$router.push({ name: 'game', params: { id: 7.4 } });
        } else {
          this.$router.push({ name: 'loose' });
        }
      }
    }
  }
};
</script>
