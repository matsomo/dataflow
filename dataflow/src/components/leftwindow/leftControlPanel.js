import React, {Component} from 'react';
import styled from 'styled-components';

const MainPanel = styled.div`
  text-align: center;
`;

const SearchField = styled.input`
  height: 35px;
  width: 400px;
  border: 0;
  outline: 0;
  padding-left: 35px;
  :focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  height: 37px;
  border: 0;
  width: 60px;
  margin: 0;
  padding: 4px;
`;

const SearchBar = styled.div`
  border-radius: 15px;
  width: 460px;
  margin: auto;
  padding: 0;
  background-color: blue;
  overflow: hidden;
`;

const ButtonPanel = styled.div`
  text-align: center;
`;

class LeftControlPanel extends Component {
  render() {
    return(
      <MainPanel>
        <SearchBar>
          <SearchField placeholder='What are you looking for?' type='text'/>
          <SearchButton>Search</SearchButton>
        </SearchBar>
      </MainPanel>
    );
  }
}

export default LeftControlPanel;
