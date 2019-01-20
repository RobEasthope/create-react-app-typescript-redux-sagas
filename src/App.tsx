import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";

import Header from "./components/layout/Header";
import configureStore from "./configureStore";
import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";

const history = createBrowserHistory();

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          {/* Add global styles */}
          <Normalize />
          <GlobalStyles />

          {/* Add header */}
          <Header />

          {/* Main routing */}
          <Routes />
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
