<template>
  <div>
      <div v-for="(todo, index) in todos" :key="index">
            {{ todo.description }}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { GET_TODOS } from '../store/getters';

export default {
  computed: mapGetters({ todos: GET_TODOS }),
};
</script>
