// console.log('allo', store);


// function add() {
//     store.commit('ADD_TODO', { description: 'from plain old plain-js' })
// }

store.subscribe((mutation, state) => {
  console.log(mutation.type)
//   console.log(mutation.payload)
    const mainDiv = document.getElementById("plainjs");
    const newDiv = document.createElement("div");
    
    newDiv.append(document.createTextNode(mutation.type));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createElement("br"));

    newDiv.append(document.createTextNode('Past'));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createTextNode(JSON.stringify(state.past)));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createElement("br"));

    newDiv.append(document.createTextNode('Present'));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createTextNode(JSON.stringify(state.present)));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createElement("br"));

    newDiv.append(document.createTextNode('Future'));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createTextNode(JSON.stringify(state.future)));
    newDiv.append(document.createElement("br"));
    newDiv.append(document.createElement("br"));

    newDiv.append(document.createElement("hr"));

    mainDiv.prepend(newDiv);


    
    

})