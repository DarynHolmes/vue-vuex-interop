
export const GET_TODOS = 'GET_TODOS';

export default {
  [GET_TODOS](state) {
    return state.present.todos;
  },
};
