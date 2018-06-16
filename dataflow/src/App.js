import React, { Component } from 'react';
import LeftControlPanel from './components/leftwindow/leftControlPanel';
import LeftOutput from './components/leftwindow/leftOutput';
import styled from 'styled-components';
import './App.css';

const Window = styled.div`
  background-color: #262728;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LeftContainer = styled.div`
  background-color: #46494c;
  height: 100%;
  width: 50%;
  padding: 20px;
  margin: 0;
`;

class App extends Component {
  render() {
    return (
      <Window>
        <LeftContainer>
          <LeftControlPanel />
          <LeftOutput />
        </LeftContainer>
      </Window>
    );
  }
}

export default App;
