"use strict"

const { createStore }  = require("redux")


function todo(state = [], action) {
  switch (action.type) {
    case "ADD":
      state.push({ text: action.text })
      return state
    default:
      return [ 
        { text: action.text }
      ]
  }
}


let store = createStore(todo)
let state

store.subscribe(() => {
  console.log(state === store.getState())
  state = store.getState()
})


store.dispatch({ type: "ADD", text: "new job" })

store.dispatch({ type: "ADD", text: "new job 2" })
store.dispatch({ type: "ADD", text: "new job 3" })
