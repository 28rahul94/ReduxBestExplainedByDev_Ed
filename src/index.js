import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

import "./styles.css";

// //STORE -GLOBALIZED STATE

// //ACTION INCREMENT

// const increment=()=>{
//   return{
//     type:'INCREMENT'
//   }
// }

// const decrement=()=>{
//   return{
//     type:'DECREMENT'
//   }
// }

// //REDUCER

// const counter=(state=0,action)=>{
//   switch(action.type){
//     case 'INCREMENT':return state+1

//     case 'DECREMENT': return state-1

//     default: return state
//   }

// }

// let store=createStore(counter)

// //DISPLAY IT IN CONSOLE
// store.subscribe(()=>console.log(store.getState()))
// //DISPATCH

// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
