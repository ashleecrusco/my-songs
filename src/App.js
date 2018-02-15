import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'


class App extends Component {
  render() {

    return (
      <div className="App">
        <Button as="a" href="http://localhost:3001/api/v1/login">Log In</Button>
      </div>
    )
  }
}

export default App;
