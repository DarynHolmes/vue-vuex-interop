// console.log('allo', store);


// function add() {
//     store.commit('ADD_TODO', { description: 'from plain old plain-js' })
// }

let stateCount = 0;
store.subscribe((mutation, state) => {

    const mainDiv = document.getElementById("plainjs");
    const newDiv = document.createElement("div");

    const pastDiv = document.createElement("div");
    pastDiv.append(document.createTextNode('State: ' + (++stateCount)));
    pastDiv.className = 'state-count';
    newDiv.append(pastDiv);
    
    const mutationDiv = document.createElement("div");
    mutationDiv.append(document.createTextNode(mutation.type));
    mutationDiv.className = 'mutation';
    newDiv.append(mutationDiv);

    
    let snapshot = state.past[state.past.length-1]; 
    let snapshotTitleDiv = document.createElement("div"); 
    snapshotTitleDiv.append(document.createTextNode('Past')); 
    snapshotTitleDiv.className = 'snapshot-title';
    
    newDiv.append(snapshotTitleDiv);
    
    let snapshotDiv = document.createElement("div"); 
    snapshotDiv.className = 'snapshot';
    if (snapshot && snapshot.todos.length !== 0) {
      snapshot.todos.forEach(function(todo) {
        const todoDiv = document.createElement("div"); 
        todoDiv.className = 'customTodo';
        const descDiv = document.createElement("div");
        descDiv.append(document.createTextNode('Desc: ' + todo.description));
        const doneDiv = document.createElement("div");
        doneDiv.append(document.createTextNode('Done: ' + todo.done));
        todoDiv.append(descDiv);
        todoDiv.append(doneDiv);      
        snapshotDiv.append(todoDiv);
      });
    }
    else {
       snapshotDiv.append(document.createTextNode('empty'));
    }
    newDiv.append(snapshotDiv);


    snapshotTitleDiv = document.createElement("div"); 
    snapshotTitleDiv.append(document.createTextNode('Present')); 
    snapshotTitleDiv.className = 'snapshot-title';
    
    newDiv.append(snapshotTitleDiv);
    snapshot = state.present;     
    snapshotDiv = document.createElement("div"); 
    snapshotDiv.className = 'snapshot';
    snapshot.todos.forEach(function(todo) {
      const todoDiv = document.createElement("div"); 
      todoDiv.className = 'customTodo';
      const descDiv = document.createElement("div");
      descDiv.append(document.createTextNode('Desc: ' + todo.description));
      const doneDiv = document.createElement("div");
      doneDiv.append(document.createTextNode('Done: ' + todo.done));
      todoDiv.append(descDiv);
      todoDiv.append(doneDiv);      
      snapshotDiv.append(todoDiv);
    });
    
    newDiv.append(snapshotDiv);

    snapshot = state.future[state.future.length-1]; 
    
    snapshotTitleDiv = document.createElement("div"); 
    snapshotTitleDiv.append(document.createTextNode('Future')); 
    snapshotTitleDiv.className = 'snapshot-title';
    
    newDiv.append(snapshotTitleDiv);

      
    snapshotDiv = document.createElement("div"); 
    snapshotDiv.className = 'snapshot';

    if (snapshot) {
      snapshot.todos.forEach(function(todo) {
        const todoDiv = document.createElement("div"); 
        todoDiv.className = 'customTodo';
        const descDiv = document.createElement("div");
        descDiv.append(document.createTextNode('Desc: ' + todo.description));
        const doneDiv = document.createElement("div");
        doneDiv.append(document.createTextNode('Done: ' + todo.done));
        todoDiv.append(descDiv);
        todoDiv.append(doneDiv);      
        snapshotDiv.append(todoDiv);
      });
    }
    else {
       snapshotDiv.append(document.createTextNode('empty'));
    }
      
    newDiv.append(snapshotDiv);
    

    // newDiv.append(document.createElement("hr"));
    mainDiv.prepend(newDiv);
    
    
    // newDiv.append(document.createElement("br"));
    // newDiv.append(document.createTextNode(JSON.stringify(state.past)));
    // newDiv.append(document.createElement("br"));
    // newDiv.append(document.createElement("br"));

    // newDiv.append(document.createTextNode('Present'));
    // newDiv.append(document.createElement("br"));
    // newDiv.append(document.createTextNode(JSON.stringify(state.present)));
    // newDiv.append(document.createElement("br"));
    // newDiv.append(document.createElement("br"));

    // newDiv.append(document.createTextNode('Future'));
    // newDiv.append(document.createElement("br"));
    // newDiv.append(document.createTextNode(JSON.stringify(state.future)));
    // newDiv.append(document.createElement("br"));
    // newDiv.append(document.createElement("br"));

    // newDiv.append(document.createElement("hr"));



    
    

})