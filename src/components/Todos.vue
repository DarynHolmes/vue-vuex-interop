<template>
  <div>
      <div v-for="(todo, index) in todos" :key="index" class="todo"  :class="{ done: todo.done }" @click="toggleTodo(index)" >
            {{ todo.description }}
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { GET_TODOS } from '../store/getters';

export default {
  computed: mapGetters({ todos: GET_TODOS }),
  methods: mapActions(['toggleTodo']),
};
</script>

<style scoped>



.todo {
  background-color: #b0e0b5;
  border: 1px solid #4eba59;
  border-top: 0;
  padding: 15px;
}

.todo:first-child {
  border-top: 1px solid #4eba59;
}

.todo:hover {
  background-color: #7fcd87;
}

.done {
  text-decoration: line-through;
  color: gray;
  
}

</style>
