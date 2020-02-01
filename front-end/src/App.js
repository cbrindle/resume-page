import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Context from './components/Context/Context';
import MainRouter from './MainRouter'
import Spinner from './components/Spinner/Spinner';


export default class App extends Component {
  
  state = {
    isAuth: false,
    user : null
  }



  render() {
    return (
      <Context.Provider
        value={{
          isAuth: this.state.isAuth,
          user: this.state.user
        }}
      >
        <Router>
          <React.Suspense fallback={<Spinner />}>
            <MainRouter />
          </React.Suspense>
        </Router>
      </Context.Provider>
    )
  }
}