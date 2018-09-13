import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {combineReducers, createStore} from "redux";
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';

import Todo from './views/Todo';
import Statistic from './views/Statistic';
import Reducer from './dataStore/Reducer'

const store = createStore(Reducer);

const Main = () => (
    <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <div className="tabs-title">
                <Link to='/'> To dos</Link>
                <Link to='/statistic'> Statistic</Link>
            </div>
            <Switch>
                <div className="tabs-body">
                    <Route exact path='/' component={Todo}/>
                    <Route path='/statistic' component={Statistic}/>
                </div>
            </Switch>
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
