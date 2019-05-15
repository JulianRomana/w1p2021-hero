<template>
  <div>
    <h1>{{ step.step.title }}</h1>
    <div v-for="action in step.path" :to="path.to.toString()" @click="changeRoute()">{{ path.name }}</div @click="action.route">
  </div>
</template>

<script>
import game from '/assets/data/data.json';
//console.log(game.phases[0]);

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
    console.log(this.step.step);
  },
  methods: {
    getStep() {
      return {
        step: game.phases.find(
          step => step.id === parseInt(this.$route.params.id)
        )
      };
    }
  }
};
</script>
