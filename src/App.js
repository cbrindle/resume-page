import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from './components/Context/Context';
import MainRouter from './MainRouter'



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
          
            <MainRouter />
          
        </Router>
      </Context.Provider>
    )
  }
}