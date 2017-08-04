import { ADD_TODO, TOGGLE_TODO } from './mutation_types';

export default {
  addTodo({ commit }, todo) {
    commit(ADD_TODO, todo);
  },
  toggleTodo({ commit }, index) {
    commit(TOGGLE_TODO, index);
  },
  undo({ commit }) {
    commit('UNDO');
  },
  redo({ commit }) {
    commit('REDO');
  },
};
