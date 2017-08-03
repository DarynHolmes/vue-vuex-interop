import { ADD_TODO } from './mutation_types';

export default {
  addTodo({ commit }, todo) {
    commit(ADD_TODO, todo);
  },
};
