// @ts-check

// Why does this file use the `.js` extension instead of `.tsx`? It's because Parcel only accepts an
// `index.js` file as an entry point. However, we can enable TS typechecking by adding the
// `@ts-check` comment at the beginning of our file.

import { ConnectedRouter } from "connected-react-router";
import { createHashHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import App from "./App";
import configureStore from "./configureStore";
import * as serviceWorker from "./serviceWorker";

import "typeface-ibm-plex-sans";

// We use hash history because this example is going to be hosted statically.
// Normally you would use browser history.
const history = createHashHistory();

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
