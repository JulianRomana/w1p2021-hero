<template>
  <div class="screen">
    <h1>{{ step.step.name }}</h1>
    <h2>{{ step.step.to }}</h2>
    <h2 />
    <img class="parchemin" src="/assets/pictures/parchemin.png" alt @click="takeParchemin()">
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
.parchemin {
  width: 100px;
}
</style>
<script>
import game from '/assets/data/data.json';
import getParchemin from '/services/functions';

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
    },
    changePath(action) {
      this.$router.push({ name: 'game', params: { id: action.to } });
    }
  }
};
</script>
