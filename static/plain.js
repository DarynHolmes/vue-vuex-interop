
store.subscribe((mutation, state) => {     	
  console.log('Mutation type: ' + mutation.type) 	
  
  switch(mutation.type) {
    case 'ADD_TODO': 
        console.log('Description: ', mutation.payload.description)
        console.log('Done: ', mutation.payload.done) 
        break
    default:
        console.log('Mutation payload: ', mutation.payload) 
  }
})
