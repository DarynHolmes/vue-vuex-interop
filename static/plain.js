
store.subscribe((mutation, state) => {     	
  console.log('Mutation type: ' + mutation.type) 	
  console.log('Mutation payload: ', mutation.payload) 
})
