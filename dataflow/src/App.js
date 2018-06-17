import React, { Component } from 'react';
import LeftControlPanel from './components/leftwindow/leftControlPanel';
import LeftOutput from './components/leftwindow/leftOutput';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

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
  background-color: #292c34;
  height: 100%;
  width: 50%;
  min-width: 500px;
  padding: 20px;
  margin: 0;
`;

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Window>
          <LeftContainer>
            <LeftControlPanel />
            <LeftOutput />
          </LeftContainer>
        </Window>
      </Provider>
    );
  }
}

export default App;
