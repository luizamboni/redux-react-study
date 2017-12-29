"use strict"

const { createStore, applyMiddleware } = require('redux')
const promiseMiddleware  = require('redux-promise-middleware').default

/* i not understand the need of this middleware */
const thunkMiddleware  = require('redux-thunk').default


const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST_PENDING':
      return { isPending: true }
    case 'GET_POST_FULFILLED':
      return { body: action.payload }
    default:
      return state
  }
}


const store = createStore(reducer, {}, applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: "GET_POST",
  payload: new Promise(resolve => {
    setTimeout(() => resolve({ abc: 123 }), 1000)
  })
})
