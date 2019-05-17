<template>
  <div>
    <h1>{{ step.step.title }}</h1>
    <h2 />
    <img class="parchemin" src="/assets/pictures/parchemin.png" alt @click="takeParchemin()">
    <div v-for="action in step.step.actions" :key="action.path ">{{ step.step.path.name }}</div>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}
.parchemin {
  width: 100px;
}
.button {
  width: 100px;
  height: 10px;
  color: red;
}
</style>
<script>
import game from '/assets/data/data.json';
import getParchemin from '/services/functions';
console.log(getParchemin);

export default {
  data: function() {
    return {
      step: this.getStep()
    };
  },
  watch: {
    '$route.params.id'(to, from) {
      this.step = this.getStep();
    }
  },

  mounted() {
    console.log(this.step.step.path.name);
  },
  methods: {
    getStep() {
      return {
        step: game.phases.find(
          step => step.id === parseInt(this.$route.params.id)
        )
      };
    },
    takeParchemin() {
      getParchemin.took();
    }
  }
};
</script>
