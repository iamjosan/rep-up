import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userSession from "./redux-reducers";

//sessionStorage.clear();
//set session
//sessionStorage.setItem('user', JSON.stringify({name:'josan'}));
//get cached session from browser
let cachedSession = JSON.parse(sessionStorage.getItem("user")) || {};
console.log(cachedSession);

//create redux store with initial state as cached session if exists
const reduxStore = createStore(userSession, { user: cachedSession });
const unsubscribe = reduxStore.subscribe(() =>
  console.log(reduxStore.getState())
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App reduxState={reduxStore} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
