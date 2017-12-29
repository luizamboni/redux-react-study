"use strict"

const { createStore }  = require("redux")


function todo(state = {}, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, ...action.entry }
    default:
      return state
  }
}


let store = createStore(todo)
let state
store.subscribe(() => {
  console.log(state === store.getState())
  
  console.log(store.getState())
})


store.dispatch({ type: "ADD", entry: { job1: "new job" }})

store.dispatch({ type: "ADD", entry: { job2: "new job 2" }})
store.dispatch({ type: "ADD", entry: { job3: "new job 3" }})
