import React from "react";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as reducers from './state/reducers';
import Smurfs from "./components/Smurfs";

const rootReducer = combineReducers({
  smurfs: reducers.smurfsReducer,
})

const store = createStore(
  rootReducer,
  compose (
    applyMiddleware(thunk),
  )
)

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Smurfs />
      </div>
    </Provider>
  );
}


export default App;
