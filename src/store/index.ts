import { Action, AnyAction, combineReducers, Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";

import { connectRouter } from "connected-react-router";

import { layoutReducer, LayoutState } from "./layout";

import { heroesReducer } from "./heroes/reducer";
import heroesSaga from "./heroes/sagas";
import { HeroesState } from "./heroes/types";
import { teamsReducer } from "./teams/reducer";
import teamsSaga from "./teams/sagas";
import { TeamsState } from "./teams/types";

// The top-level state object
export interface ApplicationState {
  router: any;
  layout: LayoutState;
  heroes: HeroesState;
  teams: TeamsState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = history =>
  combineReducers<ApplicationState>({
    router: connectRouter(history),
    layout: layoutReducer,
    heroes: heroesReducer,
    teams: teamsReducer
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(heroesSaga), fork(teamsSaga)]);
}