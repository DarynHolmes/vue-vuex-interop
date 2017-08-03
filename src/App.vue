<template>
  <div id="app">
    <create-todo></create-todo>
    <todos></todos>
  </div>
</template>

<script>
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import store from './store/store';

window.store = store;

export default {
  name: 'app',
  store,
  components: {
    CreateTodo,
    Todos,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 50%;
  /* border: solid 1px black; */
  /* display: inline-block; */
  /* width: 40%; */
}

#plainjs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  /* border: solid 1px black; */
  /* display: inline-block; */
  /* width: 40%; */
}
</style>
