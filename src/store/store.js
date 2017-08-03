import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
// import undoRedoPlugin from './undo_redo_plugin';

// { description: 'go shoppnig' }, { description: 'have a swim' },
// { description: 'plan the trip' }] }

Vue.use(Vuex);

const state = {
  past: [],
  present: { todos: [] },
  future: [],
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});

