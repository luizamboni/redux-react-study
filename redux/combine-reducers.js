"use strict"

const { createStore, combineReducers } = require("redux")



const todo = (state = [], action) => {

  switch (action.type) {
    case "ADD":
      console.log("ADD in todo")
      return [ ...state, { text: action.text } ]
    default:
      return state
  }
}

const count = (state = 0, action) => {

  switch (action.type) {
    case "INCREMENT":
      return ++state
    case "DECREMENT":
      return --state
    case "ADD":
      console.log("ADD in count")
      return ++state

    default:
      return state
  }
}

const conbinedRedux = combineReducers({ todo, count})


let store = createStore(conbinedRedux)

store.subscribe(() => {
  console.log(store.getState())
})

/* IMPORTANT ADD action will dispatch both reducers */
store.dispatch({ type: "ADD", text: "new job" })

store.dispatch({ type: "ADD", text: "new job 2" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })

store.dispatch({ type: "ADD", text: "new job 3" })
store.dispatch({ type: "DECREMENT" })
