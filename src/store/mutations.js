/* eslint-disable */

import _ from 'lodash';
import { ADD_TODO } from './mutation_types';

export default {
  [ADD_TODO](state, todo) {
    state.past.push(_.cloneDeep(state.present));
    state.present.todos.push(todo);
    state.future = [];
  },
  ['UNDO'](state) {
    const previous = state.past.pop();
    state.future.push(state.present);
    state.present = previous;
  },
  ['REDO'](state) {
    const next = state.future.pop();
    state.past.push(state.present);
    state.present = next;
  }

};
