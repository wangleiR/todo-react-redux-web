import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import {combineReducers, createStore} from "redux";
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';

import Todo from './views/Todo';
import Statistic from './views/Statistic';
import Reducer from './dataStore/Reducer';
import Dialog from './components/dialog/';

const store = createStore(Reducer);

const Main = () => (
    <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <div className="tabs-title">
                <Link to='/'> To dos</Link>
                <Link to='/statistic'> Statistic</Link>
            </div>
            <div className="tabs-body">
                <Switch>
                    <Route exact path='/' component={Todo}/>
                    <Route path='/statistic' component={Statistic}/>
                    <Route path='/detail:id' component={Dialog}/>
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
