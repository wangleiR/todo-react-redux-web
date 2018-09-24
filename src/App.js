import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {combineReducers, createStore} from "redux";
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';

import Todo from './views/Todo';
import Statistic from './views/Statistic';
import Reducer from './dataStore/Reducer';
import Dialog from './components/dialog/';
import Login from "./components/login";
import { authenticationReducer } from "./dataStore/authenticationReducer";
import tagReducer from "./dataStore/tagReducer";

const store = createStore(combineReducers({
    isAuthenticated: authenticationReducer,
    reducer :Reducer,
    tagReducer:tagReducer,
}));



const Main = () => (
    <Provider store={store}>
        <BrowserRouter>
          <div className="container">
              {
                  store.getState().isAuthenticated.isSucceed
              }
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/statistic' component={Statistic}/>
                    <Route path='/details/:id' component={Dialog}/>
                    <Route path="/home" component={Todo} />
                </Switch>
            </div>
          </div>
        </BrowserRouter>
    </Provider>
);


class App extends Component {
  render() {
    return (
        <div>
            <Main />
        </div>
    );
  }
}

export default App;
