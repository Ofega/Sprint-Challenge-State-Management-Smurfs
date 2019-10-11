import React from "react";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as reducers from './state/reducers';
import Smurfs from "./components/Smurfs";
import NewSmurfForm from "./components/NewSmurfForm";
import styled from 'styled-components';

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
      <StyledContainer className="App">
        <h1 className="centered">SMURFS! 2.0 W/ Redux</h1>
        <p className="centered">Welcome to your state management version of Smurfs!</p>
        <NewSmurfForm />
        <Smurfs />
      </StyledContainer>
    </Provider>
  );
}


export default App;

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: .5rem;
  }

  .centered {
    text-align: center;
  }
`
