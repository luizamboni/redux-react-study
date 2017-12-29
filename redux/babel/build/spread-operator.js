"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const { createStore } = require("redux");

function todo(state = {}, action) {
  switch (action.type) {
    case "ADD":
      return _extends({}, state, action.entry);
    default:
      return state;
  }
}

let store = createStore(todo);
let state;
store.subscribe(() => {
  console.log(state === store.getState());

  console.log(store.getState());
});

store.dispatch({ type: "ADD", entry: { job1: "new job" } });

store.dispatch({ type: "ADD", entry: { job2: "new job 2" } });
store.dispatch({ type: "ADD", entry: { job3: "new job 3" } });