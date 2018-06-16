import React, { Component } from 'react';
import LeftControlPanel from './components/leftwindow/leftControlPanel';
import LeftOutput from './components/leftwindow/leftOutput';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h3>app</h3>
        <div>
          <LeftControlPanel />
          <LeftOutput />
        </div>
      </div>
    );
  }
}

export default App;
