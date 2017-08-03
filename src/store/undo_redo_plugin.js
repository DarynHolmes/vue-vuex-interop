import _ from 'lodash';

class UndoRedoHistory {
  store;
  history = [];
  currentIndex = -1;

  init(store) {
    this.store = store;
  }

  addState(state) {
    // may be we have to remove redo steps
    if (this.currentIndex + 1 < this.history.length) {
      this.history.splice(this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex = this.currentIndex + 1;
  }

  undo() {
    const prevState = this.history[this.currentIndex - 1];
    // take a copy of the history state
    // because it would be changed during store mutations
    // what would corrupt the undo-redo-history
    // (same on redo)
    this.store.replaceState(_.cloneDeep(prevState));
    this.currentIndex = this.currentIndex - 1;
  }

  redo() {
    const nextState = this.history[this.currentIndex + 1];
    this.store.replaceState(_.cloneDeep(nextState));
    this.currentIndex = this.currentIndex + 1;
  }
}

export const undoRedoHistory = new UndoRedoHistory();
window.undoRedoHistory = undoRedoHistory;

export default function undoRedoPlugin(store) {
  // initialize and save the starting stage
  undoRedoHistory.init(store);
  const firstState = _.cloneDeep(store.state);
  undoRedoHistory.addState(firstState);

  store.subscribe((mutation, state) => {
    // is called AFTER every mutation
    undoRedoHistory.addState(_.cloneDeep(state));
  });
}
