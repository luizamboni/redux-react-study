"use strict"

const { createStore }  = require("redux")
const { List } = require('immutable')


function todo(_state = [], action) {
  const state = (_state.length === 0)? List(_state) : _state

  switch (action.type) {
    case "ADD":
      return state.push({ text: action.text })
    default:
      return state
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
