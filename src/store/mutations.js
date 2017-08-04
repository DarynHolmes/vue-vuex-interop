/* eslint-disable */

import _ from 'lodash';
import { ADD_TODO, TOGGLE_TODO } from './mutation_types';

export default {
  [ADD_TODO](state, todo) {
    state.todos.push(todo);
  },
  [TOGGLE_TODO](state, index) {
    state.todos[index].done = !state.todos[index].done;
  },

};
