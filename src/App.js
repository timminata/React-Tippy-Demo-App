import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './tippy.css';

import { Tooltip } from 'react-tippy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Tooltip
          title="This is a popup!"
          position="top"
          trigger="mouseenter"
          disabled="true"
        >
          <b>
            Hover here for popup!
          </b>
        </Tooltip>
      </div>
    );
  }
}

export default App;
