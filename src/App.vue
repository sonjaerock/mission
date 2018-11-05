<template>
  <div class="container">
    <div class="app">
      <app-problem></app-problem>
      <app-result></app-result>
    </div>
  </div>
</template>

<script>
import Problem from './components/Problem.vue';
import Result from './components/Result.vue';

export default {
  name: 'App',
  components: {
    'app-problem' : Problem,
    'app-result' : Result,
  }
}
</script>

<style>
.container {
  width:100%;
}

.app {
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
